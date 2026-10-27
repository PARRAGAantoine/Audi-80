"""
Pont de communication direct avec la session Blender active via socket TCP (port 9876)
Permet d'exécuter du code bpy en temps réel dans la fenêtre Blender ouverte.
"""

import socket
import json
import sys

def send_blender_code(code_str, timeout=30.0):
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.settimeout(timeout)
    try:
        s.connect(('127.0.0.1', 9876))
    except Exception as e:
        return {"status": "error", "message": f"Impossible de se connecter à Blender sur le port 9876: {e}"}

    cmd = {
        "type": "execute_code",
        "params": {"code": code_str}
    }
    try:
        s.sendall(json.dumps(cmd).encode('utf-8'))
        response_bytes = b""
        while True:
            chunk = s.recv(8192)
            if not chunk:
                break
            response_bytes += chunk
            # Tenter de parser si la réponse JSON est complète
            try:
                res = json.loads(response_bytes.decode('utf-8'))
                return res
            except json.JSONDecodeError:
                continue
        return json.loads(response_bytes.decode('utf-8'))
    except Exception as e:
        return {"status": "error", "message": f"Erreur pendant l'échange avec Blender: {e}"}
    finally:
        s.close()

if __name__ == "__main__":
    if len(sys.argv) > 1:
        code = sys.argv[1]
    else:
        code = "import bpy; print('Objets actifs dans Blender:', [o.name for o in bpy.data.objects])"
    res = send_blender_code(code)
    print(json.dumps(res, indent=2))
