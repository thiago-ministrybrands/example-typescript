import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

const root = new URL('../public/', import.meta.url);
const port = process.env.PORT ? Number(process.env.PORT) : 4173;

const contentTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
};

createServer(async (req, res) => {
  const path = req.url === '/' ? '/index.html' : req.url;
  try {
    const filePath = join(root.pathname, path);
    const body = await readFile(filePath);
    res.writeHead(200, { 'Content-Type': contentTypes[extname(filePath)] ?? 'text/plain' });
    res.end(body);
  } catch {
    res.writeHead(404);
    res.end('Not found');
  }
}).listen(port, () => {
  console.log(`Serving public/ at http://localhost:${port}`);
});
