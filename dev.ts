import { serve } from "bun";

const isPreview = process.env.PREVIEW === 'true';
const serverMode = isPreview ? 'Preview' : 'Development';

if (!isPreview) {
  Bun.spawn(["bun", "build", "./src/main.tsx", "--outdir=public/assets", "--watch"]);

  const tailwindWatch = Bun.spawn(["bun", "x", "tailwindcss", "-i", "./src/index.css", "-o", "./public/assets/styles.css", "--watch"], {
    stdout: 'inherit',
    stderr: 'inherit'
  });
}

const server = serve({
  port: 3000,
  development: !isPreview,
  websocket: {
    message(ws, message) { /* Handle websocket messages */ },
    open(ws) { /* Handle connection open */ },
    close(ws, code, message) { /* Handle connection close */ },
  },
  async fetch(req) {
    const url = new URL(req.url);
    
    // Sanitise and validate the path
    const normalizedPath = url.pathname.replace(/\\/g, '/').replace(/\.{2,}/g, '');
    
    if (normalizedPath.startsWith("/assets/")) {
      const filePath = `public${normalizedPath}`;
      const file = Bun.file(filePath);
      
      if (await file.exists()) {
        const ext = filePath.split('.').pop()?.toLowerCase() || '';
        const mimeTypes: Record<string, string> = {
          'js': 'application/javascript',
          'css': 'text/css',
          'png': 'image/png',
          'jpg': 'image/jpeg',
          'svg': 'image/svg+xml',
          // Add more as needed
        };
        
        const etag = `"${file.size}"`;
        
        const headers = new Headers({
          'Content-Type': mimeTypes[ext] || 'application/octet-stream',
          'Cache-Control': 'public, max-age=31536000',
          'ETag': etag
        });
        
        return new Response(file, { headers });
      }
      return new Response('Not Found', { status: 404 });
    }
    const indexFile = Bun.file('public/index.html');
    if (await indexFile.exists()) {
      return new Response(indexFile, {
        headers: {
          'Content-Type': 'text/html',
        },
      });
    }
    
    return new Response('Not Found', { status: 404 });
  }
});

console.log(`${serverMode} server running at http://localhost:${server.port}`);