import { renderProjectsList, renderProject } from "./lib/render.js";
import { join } from "path";

Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    const { pathname } = url;

    if (pathname === "/projects")
      return new Response(renderProjectsList(), {
        headers: { "Content-Type": "text/html" },
      });
    if (pathname === "/project") {
      const { status, html } = renderProject(url.searchParams.get("id"));
      return new Response(html, {
        status,
        headers: { "Content-Type": "text/html" },
      });
    }

    const file = Bun.file(
      join(
        import.meta.dir,
        "public",
        pathname === "/" ? "index.html" : pathname,
      ),
    );
    return (await file.exists())
      ? new Response(file)
      : new Response("Not Found", { status: 404 });
  },
});

console.log("Running on http://localhost:3000");
