(function () {
  const repair = window.AUDI80_REPAIR;
  const history = window.AUDI80_HISTORY || [];
  const app = document.querySelector("#app");
  const results = document.querySelector("#results");
  const search = document.querySelector("#search-input");
  const navLinks = [...document.querySelectorAll(".nav a")];

  const state = { route: "accueil", problem: null };

  function esc(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function rtaLinks(keys) {
    return (keys || []).map(key => repair.rta[key]).filter(Boolean).map(doc =>
      `<a href="${doc.file}" target="_blank">${esc(doc.label)}</a>`
    ).join("");
  }

  function rtaImages(keys) {
    return (keys || []).map(key => repair.rta[key]).filter(Boolean).map(doc =>
      `<div class="panel"><h3>${esc(doc.label)}</h3><a href="${doc.file}" target="_blank"><img class="rta-img" src="${doc.file}" alt="${esc(doc.label)}"></a></div>`
    ).join("");
  }

  function relayDiagram() {
    return `
      <svg class="relay-diagram" viewBox="0 0 420 260" role="img" aria-label="Schéma normalisé d'un relais automobile 4 ou 5 broches">
        <rect x="32" y="24" width="356" height="212" rx="10"></rect>
        <line x1="104" y1="190" x2="104" y2="76"></line>
        <line x1="316" y1="190" x2="316" y2="76"></line>
        <path d="M122 146 C154 114, 186 114, 218 146 S282 178, 314 146"></path>
        <circle cx="104" cy="190" r="12"></circle>
        <circle cx="316" cy="190" r="12"></circle>
        <text x="82" y="224">85</text>
        <text x="294" y="224">86</text>
        <line x1="204" y1="190" x2="204" y2="138"></line>
        <line x1="204" y1="138" x2="278" y2="104"></line>
        <line x1="204" y1="190" x2="204" y2="218"></line>
        <circle cx="204" cy="218" r="12"></circle>
        <circle cx="306" cy="92" r="12"></circle>
        <circle cx="306" cy="138" r="12"></circle>
        <text x="184" y="252">30</text>
        <text x="326" y="96">87</text>
        <text x="326" y="142">87a</text>
        <text x="138" y="56">bobine</text>
        <text x="222" y="56">contact</text>
      </svg>
      <ul class="terminal-list">
        <li><strong>85 / 86</strong> : bobine de commande du relais.</li>
        <li><strong>30</strong> : alimentation d'entrée.</li>
        <li><strong>87</strong> : sortie quand le relais colle.</li>
        <li><strong>87a</strong> : sortie au repos sur relais 5 broches, absente sur relais 4 broches.</li>
      </ul>`;
  }

  function technicalMedia(item) {
    const blocks = [];
    if (item.photo) {
      blocks.push(`
        <div class="panel media-panel">
          <h3>${esc(item.photo.title || "Photo")}</h3>
          <img class="tech-photo" src="${esc(item.photo.src)}" alt="${esc(item.photo.alt || item.photo.title || "Photo technique")}">
          ${item.photo.caption ? `<p>${esc(item.photo.caption)}${item.photo.source ? ` <a href="${esc(item.photo.source)}" target="_blank">Source</a>` : ""}</p>` : ""}
        </div>`);
    }
    if (item.diagram === "relay5pin") {
      blocks.push(`
        <div class="panel media-panel">
          <h3>Schéma des bornes</h3>
          ${relayDiagram()}
        </div>`);
    }
    return blocks.length ? `<section class="grid two technical-media">${blocks.join("")}</section>` : "";
  }

  function schematicGuide(item) {
    if (!item.schematic) return "";
    return `
      <section class="panel schematic-guide">
        <h2>Lire le schéma</h2>
        <div class="grid three">
          <div>
            <h3>Repères à chercher</h3>
            <ul>${(item.schematic.refs || []).map(ref => `<li>${esc(ref)}</li>`).join("")}</ul>
          </div>
          <div>
            <h3>Chemin du courant</h3>
            <ol>${(item.schematic.flow || []).map(step => `<li>${esc(step)}</li>`).join("")}</ol>
          </div>
          <div>
            <h3>Mesures utiles</h3>
            <ul>${(item.schematic.tests || []).map(test => `<li>${esc(test)}</li>`).join("")}</ul>
          </div>
        </div>
        ${item.schematic.note ? `<p>${esc(item.schematic.note)}</p>` : ""}
      </section>`;
  }

  function meterGuide(item) {
    if (!item.meter?.length) return "";
    return `
      <section class="panel meter-guide">
        <h2>Réglage multimètre</h2>
        <div class="grid two">
          ${item.meter.map(mode => `
            <div>
              <h3>${esc(mode.title)}</h3>
              <ul>${mode.steps.map(step => `<li>${esc(step)}</li>`).join("")}</ul>
            </div>
          `).join("")}
        </div>
      </section>`;
  }

  function setActive(route) {
    navLinks.forEach(link => link.classList.toggle("active", link.dataset.route === route));
  }

  function problemById(id) {
    return repair.problems.find(problem => problem.id === id);
  }

  function controlById(id) {
    return repair.controls[id];
  }

  function pieceById(id) {
    return repair.pieces[id];
  }

  function problemCategory(problem) {
    if (problem.category) return problem.category;
    const key = (problem.rta || [])[0];
    return repair.rta[key]?.label.replace("RTA ", "") || "Diagnostic";
  }

  function normalize(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function compact(value) {
    return normalize(value).replace(/\s+/g, "");
  }

  function termsFrom(query) {
    return normalize(query).split(/\s+/).filter(term => term.length > 1);
  }

  function phraseMatches(text, phrase, terms) {
    const normalized = normalize(text);
    if (terms.length === 1) {
      const term = terms[0];
      return normalized.split(/\s+/).some(word => word === term || word.startsWith(term));
    }
    return normalized.includes(phrase);
  }

  function termMatchesText(term, words, text) {
    return words.includes(term) ||
      words.some(word => word.startsWith(term)) ||
      (term.length >= 5 && text.includes(term));
  }

  function searchProblems(query) {
    const terms = termsFrom(query);
    if (!terms.length) return [];
    const phrase = normalize(query);
    return repair.problems.map(problem => {
      const suspects = (problem.suspects || []).map(id => pieceById(id)).filter(Boolean);
      const controls = (problem.controls || []).map(id => controlById(id)).filter(Boolean);
      const titleText = normalize([problem.title, problem.category, (problem.keywords || []).join(" ")].join(" "));
      const primary = [
        problem.title,
        problem.symptom,
        problem.emergency,
        problem.category,
        (problem.keywords || []).join(" ")
      ].join(" ");
      const secondary = [
        suspects.map(piece => [piece.title, piece.location, piece.role].join(" ")).join(" "),
        controls.map(control => [control.title, control.where, control.expected, control.bad].join(" ")).join(" ")
      ].join(" ");
      const primaryText = normalize(primary);
      const secondaryText = normalize(secondary);
      const allText = `${primaryText} ${secondaryText}`.trim();
      const words = allText.split(/\s+/);
      const primaryWords = primaryText.split(/\s+/);
      let score = terms.reduce((total, term) => {
        if (primaryWords.includes(term)) return total + 12;
        if (primaryWords.some(word => word.startsWith(term))) return total + 8;
        if (words.includes(term)) return total + 3;
        if (words.some(word => word.startsWith(term))) return total + 1;
        return total;
      }, 0);
      const titlePhraseMatch = phraseMatches(titleText, phrase, terms);
      const primaryPhraseMatch = phraseMatches(primaryText, phrase, terms);
      if (titlePhraseMatch) score += 80;
      if (primaryPhraseMatch) score += 35;
      const titleWords = titleText.split(/\s+/);
      if (terms.every(term => termMatchesText(term, titleWords, titleText))) score += 25;
      const allTermsInPrimary = terms.every(term =>
        termMatchesText(term, primaryWords, primaryText)
      );
      const allTermsSomewhere = terms.every(term =>
        termMatchesText(term, words, allText)
      );
      const directMatch = titlePhraseMatch || primaryPhraseMatch || allTermsInPrimary;
      const broadSingleTerm = terms.length === 1 && (directMatch || (terms[0].length >= 5 && score >= 3));
      const usefulMultiTerm = terms.length > 1 && allTermsSomewhere && score >= (terms.length * 8);
      return { problem, score, include: directMatch || broadSingleTerm || usefulMultiTerm };
    }).filter(item => item.include && item.score > 0)
      .sort((a, b) => b.score - a.score || a.problem.title.localeCompare(b.problem.title))
      .map(item => item.problem);
  }

  function renderResults(query) {
    const matches = searchProblems(query);
    if (!query.trim()) {
      results.hidden = true;
      results.innerHTML = "";
      app.hidden = false;
      return;
    }
    app.hidden = true;
    results.hidden = false;
    results.innerHTML = `
      <h1>${matches.length} résultat(s)</h1>
      ${matches.length ? matches.map(problemCard).join("") : `<p>Aucune fiche de réparation disponible pour cette recherche.</p>`}
    `;
  }

  function problemCard(problem) {
    return `<a class="card" href="#panne/${problem.id}">
      <div class="tag-row"><span class="tag">${esc(problemCategory(problem))}</span></div>
      <h3>${esc(problem.title)}</h3>
      <p>${esc(problem.symptom)}</p>
    </a>`;
  }

  function renderHome() {
    state.route = "accueil";
    setActive("accueil");
    search.value = "";
    app.hidden = false;
    results.hidden = true;
    results.innerHTML = "";
    app.innerHTML = `
      <section class="home-hero">
        <img src="images/audi-80-hero.jpg" alt="${esc(repair.vehicle.title)} ${esc(repair.vehicle.year)}">
        <div class="home-hero-content">
          <p class="eyebrow">Audi</p>
          <h1>${esc(repair.vehicle.title)} ${esc(repair.vehicle.year)}</h1>
          <p>${esc(repair.vehicle.modelYear)} · moteur ${esc(repair.vehicle.engine)} · boîte ${esc(repair.vehicle.gearbox)} · carburateur ${esc(repair.vehicle.carburetor)}</p>
        </div>
      </section>
      <section class="vehicle-strip">
        <div><span>VIN</span><strong>${esc(repair.vehicle.vin)}</strong></div>
        <div><span>Moteur</span><strong>${esc(repair.vehicle.engine)}</strong></div>
        <div><span>Boîte</span><strong>${esc(repair.vehicle.gearbox)}</strong></div>
        <div><span>Alimentation</span><strong>${esc(repair.vehicle.carburetor)}</strong></div>
      </section>
      <section class="home-search panel">
        <h2>Recherche de panne</h2>
        <input id="home-search-input" type="search" placeholder="Symptôme, organe ou panne">
      </section>
      <section class="grid two">
        <a class="card action-card" href="#reparation">
          <h2>Mode réparation</h2>
          <p>Diagnostics, contrôles cliquables, fiches pièces et extraits RTA ciblés.</p>
        </a>
        <a class="card action-card" href="#entretien">
          <h2>Mode suivi d'entretien</h2>
          <p>Historique, kilométrage, factures et interventions.</p>
        </a>
      </section>`;
    const homeSearch = document.querySelector("#home-search-input");
    homeSearch.addEventListener("input", event => {
      search.value = event.target.value;
      renderResults(event.target.value);
    });
  }

  function renderRepairHome() {
    state.route = "reparation";
    setActive("reparation");
    search.value = "";
    app.hidden = false;
    results.hidden = true;
    results.innerHTML = "";
    app.innerHTML = `
      <section class="page-head">
        <h1>Mode réparation</h1>
      </section>
      <section class="panel">
        <h2>Diagnostic</h2>
        <input id="repair-search-input" type="search" placeholder="Symptôme, organe ou panne">
      </section>
      <section class="panel workbench-note">
        <h2>Travaux restants</h2>
        <div class="todo-list">
          <a href="#panne/vibrations-roulage-pneus">
            <strong>Pneus avant</strong>
            <span>Défaut relevé au contrôle technique du 30.12.2025.</span>
          </a>
          <a href="#panne/eclairage-defaut">
            <strong>Réglage des phares</strong>
            <span>Protocole de pré-réglage disponible ; contrôle final idéalement au régloscope.</span>
          </a>
          <a href="#panne/antibrouillard-arriere">
            <strong>Antibrouillard arrière</strong>
            <span>Bouton remplacé ; contrôler fonctionnement complet avant contre-visite.</span>
          </a>
          <a href="#panne/pollution-co">
            <strong>Pollution CO</strong>
            <span>Contrôler allumage, carburation Keihin et réglage richesse.</span>
          </a>
        </div>
      </section>`;
    const repairSearch = document.querySelector("#repair-search-input");
    repairSearch.addEventListener("input", event => {
      search.value = event.target.value;
      renderResults(event.target.value);
    });
  }

  function renderProblem(id) {
    const problem = problemById(id);
    if (!problem) return renderRepairHome();
    state.route = "reparation";
    state.problem = id;
    setActive("reparation");
    search.value = "";
    renderResults("");
    app.innerHTML = `
      <article class="repair-sheet">
        <div class="page-head">
          <h1>${esc(problem.title)}</h1>
          <p>${esc(problem.symptom)}</p>
        </div>
        ${problem.emergency ? `<section class="panel warning"><strong>Attention</strong><p>${esc(problem.emergency)}</p></section>` : ""}
        <section class="grid two">
          <div class="panel">
            <h2>Contrôles à faire</h2>
            ${problem.controls.length ? `<ol class="steps">${problem.controls.map(id => {
              const control = controlById(id);
              return `<li><a href="#controle/${id}/${problem.id}"><span>${esc(control?.title || id)}</span></a></li>`;
            }).join("")}</ol>` : `<p>Protocole détaillé à compléter.</p>`}
          </div>
          <div class="panel">
            <h2>Pièces suspectes</h2>
            <div class="chips">
              ${(problem.suspects || []).map(id => {
                const piece = pieceById(id);
                return piece ? `<a class="chip" href="#piece/${id}/${problem.id}">${esc(piece.title)}</a>` : "";
              }).join("") || "<p>Aucune pièce isolée avant les contrôles.</p>"}
            </div>
          </div>
        </section>
        <section class="panel">
          <h2>RTA précise</h2>
          <div class="doc-links">${rtaLinks(problem.rta)}</div>
        </section>
        ${problem.missing ? `<section class="panel missing"><h2>Information à compléter</h2><p>${esc(problem.missing)}</p></section>` : ""}
      </article>`;
  }

  function renderControl(id, problemId) {
    const control = controlById(id);
    if (!control) return renderProblem(problemId);
    setActive("reparation");
    search.value = "";
    renderResults("");
    app.innerHTML = `
      <article class="repair-sheet">
        <a href="#panne/${problemId}">Retour à la panne</a>
        <div class="page-head">
          <h1>${esc(control.title)}</h1>
        </div>
        ${technicalMedia(control)}
        <section class="grid two">
          <div class="panel detail">
            <h2>Où regarder</h2>
            <p>${esc(control.where)}</p>
            <h2>Comment faire</h2>
            <ul>${control.how.map(step => `<li>${esc(step)}</li>`).join("")}</ul>
          </div>
          <div class="panel">
            <h2>Outils</h2>
            <div class="chips">${control.tools.map(tool => `<span class="chip">${esc(tool)}</span>`).join("")}</div>
            <h2>Résultat attendu</h2>
            <p>${esc(control.expected)}</p>
            <h2>Si mauvais</h2>
            <p>${esc(control.bad)}</p>
          </div>
        </section>
        ${meterGuide(control)}
        ${schematicGuide(control)}
        ${control.missing ? `<section class="panel missing"><h2>Information à compléter</h2><p>${esc(control.missing)}</p></section>` : ""}
        <section class="grid two">${rtaImages(control.rta)}</section>
      </article>`;
  }

  function renderPiece(id, problemId) {
    const piece = pieceById(id);
    if (!piece) return renderProblem(problemId);
    setActive("reparation");
    search.value = "";
    renderResults("");
    app.innerHTML = `
      <article class="repair-sheet">
        <a href="#panne/${problemId}">Retour à la panne</a>
        <div class="page-head">
          <h1>${esc(piece.title)}</h1>
          <p>${esc(piece.role)}</p>
        </div>
        <section class="grid two">
          <div class="panel detail">
            <h2>Où chercher</h2>
            <p>${esc(piece.location)}</p>
            <h2>Comment tester</h2>
            <ol class="steps">${piece.tests.map(controlId => {
              const control = controlById(controlId);
              return `<li><a href="#controle/${controlId}/${problemId}"><span>${esc(control?.title || controlId)}</span></a></li>`;
            }).join("")}</ol>
          </div>
          <div class="panel">
            <h2>Réparation</h2>
            <ul>${piece.repair.map(step => `<li>${esc(step)}</li>`).join("")}</ul>
          </div>
        </section>
        ${piece.missing ? `<section class="panel missing"><h2>Information à compléter</h2><p>${esc(piece.missing)}</p></section>` : ""}
        <section class="grid two">${rtaImages(piece.rta)}</section>
      </article>`;
  }

  function renderMaintenance() {
    state.route = "entretien";
    setActive("entretien");
    search.value = "";
    renderResults("");
    app.innerHTML = `
      <section class="page-head">
        <h1>Mode suivi d'entretien</h1>
      </section>
      <section class="panel">
        <h2>Historique complet</h2>
        <input id="history-filter" type="search" placeholder="Filtrer : distribution, frein, 2026, facture...">
      </section>
      <section class="table-wrap panel" style="margin-top:14px">
        <table>
          <thead><tr><th>Date</th><th>Km</th><th>Intervention</th><th>Zone</th><th>Source</th><th>Statut</th></tr></thead>
          <tbody id="history-body">${historyRows(history)}</tbody>
        </table>
      </section>`;
    document.querySelector("#history-filter").addEventListener("input", event => {
      const terms = event.target.value.toLowerCase().split(/\s+/).filter(Boolean);
      const filtered = history.filter(row => terms.every(term => Object.values(row).join(" ").toLowerCase().includes(term)));
      document.querySelector("#history-body").innerHTML = historyRows(filtered);
    });
  }

  function historyRows(rows) {
    return [...rows].sort((a, b) => historyTimestamp(b) - historyTimestamp(a)).map(row => `<tr>
      <td><strong>${esc(row.date)}</strong></td>
      <td>${esc(row.mileage)}</td>
      <td>${esc(row.intervention)}</td>
      <td>${esc(row.zone)}</td>
      <td>${esc(row.source)} ${row.files?.map(file => `<a href="${file}" target="_blank">document</a>`).join(" ") || ""}</td>
      <td>${esc(row.status)}</td>
    </tr>`).join("");
  }

  function historyTimestamp(row) {
    const value = String(row.date || "").trim();
    const fullDate = value.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
    if (fullDate) {
      const [, day, month, year] = fullDate;
      return Date.UTC(Number(year), Number(month) - 1, Number(day));
    }
    const yearOnly = value.match(/^(\d{4})$/);
    if (yearOnly) return Date.UTC(Number(yearOnly[1]), 0, 1);
    return Number.NEGATIVE_INFINITY;
  }

  function route() {
    const raw = location.hash.replace(/^#/, "");
    const [kind, id, problemId] = raw.split("/");
    if (!raw || kind === "accueil") return renderHome();
    if (kind === "reparation") return renderRepairHome();
    if (kind === "entretien") return renderMaintenance();
    if (kind === "panne") return renderProblem(id);
    if (kind === "controle") return renderControl(id, problemId);
    if (kind === "piece") return renderPiece(id, problemId);
    renderHome();
  }

  search.addEventListener("input", event => renderResults(event.target.value));
  document.querySelector("#theme-toggle").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("audi80-theme", next);
  });
  document.documentElement.dataset.theme = localStorage.getItem("audi80-theme") || "dark";
  window.addEventListener("hashchange", route);
  route();
})();
