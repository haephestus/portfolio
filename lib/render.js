import { projects } from "../data/projects-data.js";

// ── HTML shell ──────────────────────────────────────────────
export function shell(title, body) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <link href="/css/styles.css" rel="stylesheet" />
  <script type="module" src="/js/script.js" defer></script>
</head>
<body class="projects-page">
  <nav class="topbar">
    <a href="/">home</a>
    <a href="/html/art.html">art</a>
    <a href="/html/about.html">about</a>
    <a href="/html/blog.html">blog</a>
    <img class="filter-sage" src="/image/icon/YoqHVR01.svg" alt="" />
  </nav>
  ${body}
</body>
</html>`;
}

// ── Projects list page ──────────────────────────────────────
export function renderProjectsList() {
  if (!projects || projects.length === 0) {
    return shell("Projects", `<h1>No projects found</h1>`);
  }

  const cards = projects
    .map(
      (p) => `
    <a class="project-card" href="/project?id=${p.id}">
      <div class="project-card-img" style="background-image: url('${p.image || ""}')"></div>
      <div class="project-card-body">
        <h2>${p.title || "No title"}</h2>
        <p>${p.summary || ""}</p>
        <div class="project-tags">
          ${(p.tags || []).map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
        <span class="project-date">${p.date || ""}</span>
      </div>
    </a>
  `,
    )
    .join("");

  return shell(
    "Projects",
    `
    <div class="backdrop">
      <img id="backdrop" src="/image/astronaut-8061095_1280.webp" alt="Space background" />
      <div class="backdrop-content">
        <h1>Join me as I explore</h1>
        <h4>the universe</h4>
      </div>
    </div>
    <div class="projects-list">
      <h1 class="projects-heading">Projects</h1>
      <div class="projects-grid">
        ${cards}
      </div>
    </div>
  `,
  );
}

// ── Single project page ─────────────────────────────────────
export function renderProject(id) {
  const project = projects.find((p) => String(p.id) === String(id));

  if (!project) {
    return {
      status: 404,
      html: shell(
        "Not Found",
        `
      <div class="projects-list">
        <h1>Project not found</h1>
        <a href="/projects" style="color: var(--sage)">← Back to projects</a>
      </div>
    `,
      ),
    };
  }

  return {
    status: 200,
    html: shell(
      project.title,
      `
    <div class="project-detail">
      <div class="project-detail-hero" style="background-image: url('${project.image}')"></div>
      <div class="project-detail-body">
        <a class="back-link" href="/projects">← Back to projects</a>
        <h1>${project.title}</h1>
        <span>
        ${
          project.github
            ? `<a class="back-link" href="${project.github}" target="_blank" class="github-link">Go to project</a>`
            : ""
        }
        </span>
        <div class="project-tags">
          ${(project.tags || []).map((t) => `<span class="tag">${t}</span>`).join("")}
          <span class="project-date">${project.date}</span>
        </div>
        <div class="project-description">
          ${project.description || ""}
        </div>
      </div>
    </div>
  `,
    ),
  };
}
