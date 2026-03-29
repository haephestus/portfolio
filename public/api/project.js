import { renderProject } from "../lib/render.js";

export default function handler(req, res) {
  const id = req.query.id;
  const { status, html } = renderProject(id);
  res.status(status).setHeader("Content-Type", "text/html").send(html);
}
