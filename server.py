#!/usr/bin/env python3
"""
2min Animation Dashboard — Local Server
Serves static files + proxies Claude API requests.
Usage: python3 server.py [port]
"""
import http.server, json, urllib.request, urllib.error, ssl, sys

PORT = 8888

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path in ('/api/generate', '/api/chat'):
            self._proxy_claude()
        else:
            self.send_error(404)

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def _proxy_claude(self):
        try:
            body = json.loads(self.rfile.read(int(self.headers.get('Content-Length', 0))))
        except Exception:
            return self._json(400, {'error': 'Invalid JSON'})

        api_key = body.pop('apiKey', '')
        if not api_key:
            return self._json(400, {'error': 'Missing API key'})

        payload = {
            'model': body.get('model', 'claude-sonnet-4-20250514'),
            'max_tokens': body.get('max_tokens', 4096),
            'messages': body.get('messages', []),
        }
        if body.get('system'):
            payload['system'] = body['system']

        req = urllib.request.Request(
            'https://api.anthropic.com/v1/messages',
            data=json.dumps(payload).encode('utf-8'),
            headers={
                'Content-Type': 'application/json',
                'x-api-key': api_key,
                'anthropic-version': '2023-06-01',
            },
            method='POST'
        )
        try:
            resp = urllib.request.urlopen(req, context=ssl.create_default_context(), timeout=120)
            return self._json(200, json.loads(resp.read()))
        except urllib.error.HTTPError as e:
            return self._json(e.code, {'error': e.read().decode('utf-8', 'replace')})
        except Exception as e:
            return self._json(500, {'error': str(e)})

    def _json(self, code, data):
        out = json.dumps(data, ensure_ascii=False).encode('utf-8')
        self.send_response(code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', str(len(out)))
        self.end_headers()
        self.wfile.write(out)

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else PORT
    print(f'\n🎬 2min动画短片 Dashboard Server')
    print(f'   http://localhost:{port}/dashboard.html\n')
    try:
        http.server.HTTPServer(('', port), Handler).serve_forever()
    except KeyboardInterrupt:
        print('\n👋 Server stopped.')