#!/usr/bin/env python3
"""
Simple static file server for local development.
The dashboard connects directly to AI APIs from the browser — no proxy needed.
Usage: python3 server.py [port]
"""
import http.server
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000

handler = http.server.SimpleHTTPRequestHandler
handler.extensions_map.update({'.js': 'application/javascript', '.mjs': 'application/javascript'})

with http.server.HTTPServer(('127.0.0.1', PORT), handler) as httpd:
    print(f'🎬 Dev server: http://127.0.0.1:{PORT}/dashboard.html')
    print(f'   Standalone: http://127.0.0.1:{PORT}/index.html')
    print('   Press Ctrl+C to stop.')
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print('\n👋 Bye!')