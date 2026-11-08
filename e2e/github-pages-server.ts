import { readFile, stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

// Serves dist/ the way GitHub Pages does: unknown paths get 404.html with a
// 404 status, which is what the SPA redirect in 404.html depends on.

const DIST_DIR = join(import.meta.dirname, "..", "dist");
const PORT = Number(process.env.PORT ?? 4173);

const CONTENT_TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
};

const resolveFile = async (urlPath: string): Promise<string | null> => {
  const filePath = join(DIST_DIR, normalize(decodeURIComponent(urlPath)));
  if (!filePath.startsWith(DIST_DIR)) {
    return null;
  }
  try {
    const fileStat = await stat(filePath);
    return fileStat.isDirectory() ? join(filePath, "index.html") : filePath;
  } catch {
    return null;
  }
};

createServer(async (request, response) => {
  const urlPath = new URL(request.url ?? "/", "http://localhost").pathname;
  const filePath = await resolveFile(urlPath);
  const servedPath = filePath ?? join(DIST_DIR, "404.html");
  try {
    const body = await readFile(servedPath);
    response.writeHead(filePath ? 200 : 404, {
      "Content-Type":
        CONTENT_TYPES[extname(servedPath)] ?? "application/octet-stream",
    });
    response.end(body);
  } catch {
    response.writeHead(404);
    response.end();
  }
}).listen(PORT, () => {
  console.log(`Serving ${DIST_DIR} on http://localhost:${PORT}`);
});
