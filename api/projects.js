import { renderProjectsList } from "../lib/render.js";

export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send(renderProjectsList());
}
