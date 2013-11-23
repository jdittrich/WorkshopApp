#!/bin/bash

# - gets dependencies with bower

bower install

# - runs server on port 8042 or first argument

port="${1:-8042}"

echo "Opening Server on http://localhost:${port}/" & sleep 1 && open "http://localhost:${port}/" & python -c 'import SimpleHTTPServer;
map = SimpleHTTPServer.SimpleHTTPRequestHandler.extensions_map;
map[""] = "text/plain";
for key, value in map.items():
	map[key] = value + ";charset=UTF-8";
SimpleHTTPServer.test();' "$port"