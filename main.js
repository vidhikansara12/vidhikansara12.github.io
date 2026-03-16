document.addEventListener("DOMContentLoaded", () => {
  renderMeta();
  renderNav();
  renderHero();
  renderExperience();
  renderProjects();
  renderSkills();
  renderAbout();
  renderContact();
  renderFooter();
  initScrollReveal();
  initNavHighlight();
});

// ─── META ───────────────────────────────────────────────────
function renderMeta() {
  const { name, title, email } = PORTFOLIO.meta;
  document.title = `${name} — ${title}`;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", PORTFOLIO.meta.description);
}

// ─── NAV ────────────────────────────────────────────────────
function renderNav() {
  const { initials, email } = PORTFOLIO.meta;
  document.getElementById("nav-logo").textContent = `${initials}.`;
  document.getElementById("nav-cta").href = `mailto:${email}`;
}

// ─── HERO ───────────────────────────────────────────────────
function renderHero() {
  const { meta, hero } = PORTFOLIO;

  document.getElementById("hero-availability").textContent = meta.availability;
  document.getElementById("hero-name-first").textContent = meta.name.split(" ")[0];
  document.getElementById("hero-name-last").textContent = meta.name.split(" ")[1] + ".";
  document.getElementById("hero-desc").textContent = meta.description;
  document.getElementById("hero-email-cta").href = `mailto:${meta.email}`;

  // Status panel
  document.getElementById("hero-status-label").textContent = hero.status.label;
  document.getElementById("hero-status-note").textContent = hero.status.note;
  document.getElementById("hero-location").textContent = meta.location;
  document.getElementById("hero-statement").textContent = hero.statement;

  // Seeking roles
  const seekingEl = document.getElementById("hero-seeking");
  seekingEl.innerHTML = hero.seeking
    .map(r => `<span class="seeking-role">${r}</span>`)
    .join("");

  // Stack pills
  const stackEl = document.getElementById("hero-stack-pills");
  stackEl.innerHTML = hero.coreStack
    .map(s => `<span class="pill">${s}</span>`)
    .join("");
}

// ─── EXPERIENCE ─────────────────────────────────────────────
function renderExperience() {
  const grid = document.getElementById("exp-grid");
  grid.innerHTML = PORTFOLIO.experience.map(exp => `
    <div class="exp-card reveal">
      <div class="exp-role">${exp.role}</div>
      <div class="exp-company">${exp.company}</div>
      <div class="exp-date">${exp.period} · ${exp.location} · ${exp.team}</div>
      <ul class="exp-bullets">
        ${exp.bullets.map(b => `<li>${b}</li>`).join("")}
      </ul>
      <div class="exp-tags">
        ${exp.tags.map(t => `<span class="exp-tag">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// ─── PROJECTS ───────────────────────────────────────────────
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = PORTFOLIO.projects.map(p => `
    <div class="project-card${p.featured ? " featured" : ""} reveal">
      ${p.badge ? `<div class="project-badge">${p.badge}</div>` : ""}
      <div class="project-num">${p.id}</div>
      <div class="project-name">${p.name}</div>
      <div class="project-desc">${p.desc}</div>
      <div class="project-stack">
        ${p.stack.map(t => `<span class="project-tech">${t}</span>`).join("")}
      </div>
      <a href="${p.github}" target="_blank" rel="noopener" class="project-link">
        View on GitHub →
      </a>
    </div>
  `).join("");
}

// ─── SKILLS ─────────────────────────────────────────────────
function renderSkills() {
  const container = document.getElementById("skills-groups");
  container.innerHTML = PORTFOLIO.skills.map(group => `
    <div class="skill-group">
      <div class="skill-group-label">${group.category}</div>
      <div class="skill-row">
        ${group.items.map(item => `
          <span class="skill-item${item.highlight ? " highlight" : ""}">${item.name}</span>
        `).join("")}
      </div>
    </div>
  `).join("");
}

// ─── ABOUT ──────────────────────────────────────────────────
function renderAbout() {
  const body = document.getElementById("about-body");
  body.innerHTML = PORTFOLIO.about.map(p => `<p>${p}</p>`).join("");

  const eduStack = document.getElementById("edu-stack");
  eduStack.innerHTML = PORTFOLIO.education.map(edu => `
    <div class="edu-card">
      <div class="edu-degree">${edu.degree}</div>
      <div class="edu-school">${edu.school} · ${edu.location}</div>
      ${edu.honors ? `<div class="edu-honors">${edu.honors}</div>` : ""}
      <div class="edu-meta">
        <span class="edu-year">${edu.year}</span>
        <span class="edu-gpa">${edu.gpa} GPA</span>
      </div>
      <div class="courses">
        ${edu.courses.map(c => `<span class="course-tag">${c}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// ─── CONTACT ────────────────────────────────────────────────
function renderContact() {
  const { email, linkedin, github } = PORTFOLIO.meta;
  const links = [
    { label: "Email", value: email, href: `mailto:${email}` },
    { label: "LinkedIn", value: "linkedin.com/in/vidhikansara12", href: linkedin },
    { label: "GitHub", value: "github.com/vidhikansara12", href: github },
  ];
  const container = document.getElementById("contact-links");
  container.innerHTML = links.map(l => `
    <a href="${l.href}" target="_blank" rel="noopener" class="contact-link">
      <div>
        <div class="contact-link-label">${l.label}</div>
        <div class="contact-link-val">${l.value}</div>
      </div>
      <span class="contact-arrow">→</span>
    </a>
  `).join("");
}

// ─── FOOTER ─────────────────────────────────────────────────
function renderFooter() {
  const { name } = PORTFOLIO.meta;
  // Dynamic year — never hardcoded
  document.getElementById("footer-year").textContent = new Date().getFullYear();
  document.getElementById("footer-name").textContent = name;
}

// ─── SCROLL REVEAL ──────────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );

  // Observe all reveal elements (including dynamically rendered ones)
  // Use a short delay to let DOM render first
  setTimeout(() => {
    document.querySelectorAll(".reveal").forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i * 0.04, 0.3)}s`;
      observer.observe(el);
    });
  }, 50);
}

// ─── NAV ACTIVE STATE ───────────────────────────────────────
function initNavHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          navLinks.forEach((a) => a.classList.remove("active"));
          const match = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
          if (match) match.classList.add("active");
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((s) => obs.observe(s));
}