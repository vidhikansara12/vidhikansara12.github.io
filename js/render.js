/**
 * RENDER.JS — Modular Section Renderers
 * Each section has its own render function.
 * All DOM writes happen here; data lives in data.js.
 */

/* ══════════════════════════════════════════════════════
   META
══════════════════════════════════════════════════════ */
function renderMeta() {
  const { name, title, description } = PORTFOLIO.meta;
  document.title = `${name} — ${title}`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", description.replace(/<[^>]+>/g, ""));
}

/* ══════════════════════════════════════════════════════
   NAV
══════════════════════════════════════════════════════ */
function renderNav() {
  const logo = document.getElementById("nav-logo");
  if (logo) logo.textContent = PORTFOLIO.meta.initials + ".";
}

/* ══════════════════════════════════════════════════════
   HERO
══════════════════════════════════════════════════════ */
function renderHero() {
  const { meta, hero } = PORTFOLIO;

  // Availability pill
  setHTML("avail-label", meta.availability || "");

  // Name
  setText("name-first", meta.firstName);
  // Add a period after last name — classic portfolio detail
  setText("name-last", meta.lastName + ".");

  // Tagline & desc
  setText("hero-tagline", meta.tagline);
  setHTML("hero-desc", meta.description);

  // Currently building panel
  setText("build-name", hero.building.name);
  setText("build-note", hero.building.note);

  // Core stack pills
  const stackEl = document.getElementById("panel-stack");
  if (stackEl) {
    stackEl.innerHTML = hero.coreStack
      .map(s => `<span class="panel-pill">${s}</span>`)
      .join("");
  }

  // Interests list
  const interestsEl = document.getElementById("panel-interests");
  if (interestsEl) {
    interestsEl.innerHTML = hero.interests
      .map(i => `<li>${i}</li>`)
      .join("");
  }

  // Philosophy quote
  setHTML("panel-quote", hero.philosophy);

  // Social links
  const socialEl = document.getElementById("hero-social");
  if (socialEl) {
    const links = [
      { label: "GitHub",   href: meta.github,   icon: "⌥" },
      { label: "LinkedIn", href: meta.linkedin,  icon: "⌘" },
      { label: "Email",    href: `mailto:${meta.email}`, icon: "✉" },
    ];
    socialEl.innerHTML = links
      .map(l => `
        <a href="${l.href}" target="_blank" rel="noopener" class="social-link">
          ${l.label} →
        </a>`)
      .join("");
  }
}

/* ══════════════════════════════════════════════════════
   EXPERIENCE
══════════════════════════════════════════════════════ */
function renderExperience() {
  const container = document.getElementById("exp-list");
  if (!container) return;

  container.innerHTML = PORTFOLIO.experience
    .map(exp => `
      <article class="exp-card reveal" role="listitem">

        <div class="exp-meta">
          <div class="exp-period">${exp.period}</div>
          <div class="exp-co-badge">
            <span class="exp-co-icon">${exp.icon}</span>
            <span class="exp-co-name">${exp.company}</span>
          </div>
          <div class="exp-location">${exp.location}</div>
        </div>

        <div class="exp-body">
          <div class="exp-role">${exp.role}</div>
          <div class="exp-team">${exp.team}</div>
          <ul class="exp-bullets">
            ${exp.bullets.map(b => `<li>${b}</li>`).join("")}
          </ul>
          <div class="exp-tags">
            ${exp.tags.map(t => `<span class="exp-tag">${t}</span>`).join("")}
          </div>
        </div>

      </article>
    `)
    .join("");
}

/* ══════════════════════════════════════════════════════
   PROJECTS
══════════════════════════════════════════════════════ */
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  // Projects are already ordered newest → oldest in data.js
  grid.innerHTML = PORTFOLIO.projects
    .map(p => `
      <article class="project-card reveal" role="listitem">

        <div class="project-top">
          <span class="project-num">${p.num}</span>
          <span class="project-year">${p.year}</span>
        </div>

        <div class="project-name">${p.name}</div>
        <div class="project-desc">${p.desc}</div>

        <div class="project-stack">
          ${p.stack.map(t => `<span class="project-tech">${t}</span>`).join("")}
        </div>

        <div class="project-footer">
          ${p.live ? `
            <a href="${p.live}" target="_blank" rel="noopener" class="project-link live-link">
              ↗ Live Demo
            </a>` : ""}
          <a href="${p.github}" target="_blank" rel="noopener" class="project-link">
            View on GitHub →
          </a>
        </div>

      </article>
    `)
    .join("");
}

/* ══════════════════════════════════════════════════════
   ROADMAP (Suggested Next Projects)
══════════════════════════════════════════════════════ */
function renderRoadmap() {
  const grid = document.getElementById("roadmap-grid");
  if (!grid) return;

  grid.innerHTML = PORTFOLIO.roadmap
    .map(r => `
      <div class="roadmap-card">
        <div class="roadmap-soon">Planned</div>
        <div class="roadmap-name">${r.name}</div>
        <div class="roadmap-why">${r.why}</div>
      </div>
    `)
    .join("");
}

/* ══════════════════════════════════════════════════════
   SKILLS
══════════════════════════════════════════════════════ */
function renderSkills() {
  // Intro copy (opinionated paragraphs from data)
  const intro = document.getElementById("skills-intro");
  if (intro) {
    const paragraphs = PORTFOLIO.skillsIntro
      .map(p => `<p>${p}</p>`)
      .join("");

    const certCallout = PORTFOLIO.certifications.length
      ? `<div class="cert-callout">
          <div class="cert-icon">${PORTFOLIO.certifications[0].icon}</div>
          <div>
            <div class="cert-name">${PORTFOLIO.certifications[0].name}</div>
            <div class="cert-issuer">${PORTFOLIO.certifications[0].issuer} · ${PORTFOLIO.certifications[0].level}</div>
          </div>
        </div>`
      : "";

    intro.innerHTML = paragraphs + certCallout;
  }

  // Skill groups
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  grid.innerHTML = PORTFOLIO.skills
    .map(group => `
      <div class="skill-group reveal">
        <div class="skill-group-label">${group.category}</div>
        <div class="skill-pills">
          ${group.items.map(item => `<span class="skill-pill">${item}</span>`).join("")}
        </div>
      </div>
    `)
    .join("");
}

/* ══════════════════════════════════════════════════════
   CERTIFICATIONS (dedicated section)
══════════════════════════════════════════════════════ */
function renderCertifications() {
  const row = document.getElementById("certs-row");
  if (!row) return;

  row.innerHTML = PORTFOLIO.certifications
    .map(cert => `
      <div class="cert-card reveal">
        <div class="cert-card-icon">${cert.icon}</div>
        <div>
          <div class="cert-card-name">${cert.name}</div>
          <div class="cert-card-issuer">${cert.issuer}</div>
          ${cert.verifyUrl
            ? `<a href="${cert.verifyUrl}" target="_blank" rel="noopener" class="cert-badge">
                ✓ ${cert.level} · Verify ↗
               </a>`
            : `<span class="cert-badge">✓ ${cert.level}</span>`
          }
        </div>
      </div>
    `)
    .join("");
}

/* ══════════════════════════════════════════════════════
   ABOUT
══════════════════════════════════════════════════════ */
function renderAbout() {
  // Story copy
  const copy = document.getElementById("about-copy");
  if (copy) {
    copy.innerHTML = PORTFOLIO.about
      .map(p => `<p>${p}</p>`)
      .join("");
  }

  // Stats
  const stats = document.getElementById("about-stats");
  if (stats) {
    stats.innerHTML = PORTFOLIO.stats
      .map(s => `
        <div class="stat-card">
          <div class="stat-n">${s.n}</div>
          <div class="stat-l">${s.label}</div>
        </div>
      `)
      .join("");
  }

  // Education
  const edu = document.getElementById("about-edu");
  if (edu) {
    edu.innerHTML = PORTFOLIO.education
      .map(e => `
        <div class="edu-card">
          <div class="edu-degree">${e.degree}</div>
          <div class="edu-school">${e.school} · ${e.location}</div>
          ${e.honors ? `<div class="edu-honors">${e.honors}</div>` : ""}
          <div class="edu-row">
            <span class="edu-year">${e.year}</span>
            <span class="edu-gpa">${e.gpa} GPA</span>
          </div>
          <div class="edu-courses">
            ${e.courses.map(c => `<span class="edu-course">${c}</span>`).join("")}
          </div>
        </div>
      `)
      .join("");
  }
}

/* ══════════════════════════════════════════════════════
   CONTACT
══════════════════════════════════════════════════════ */
function renderContact() {
  const { meta, contact } = PORTFOLIO;

  // Left: headline + copy + OTW pill
  const left = document.getElementById("contact-left");
  if (left) {
    const links = [
      {
        icon: "✉️",
        label: "Email me",
        val: meta.email,
        href: `mailto:${meta.email}`,
      },
      {
        icon: "💼",
        label: "LinkedIn",
        val: "linkedin.com/in/vidhikansara12",
        href: meta.linkedin,
      },
      {
        icon: "⌥",
        label: "GitHub",
        val: "github.com/vidhikansara12",
        href: meta.github,
      },
    ];

    left.innerHTML = `
      <div class="contact-otw">
        <span class="avail-pulse"></span>
        Open to new grad SWE &amp; ML roles · 2026
      </div>
      <div class="contact-headline">${contact.headline}</div>
      <p class="contact-copy">${contact.copy}</p>
      <div class="contact-links">
        ${links.map(l => `
          <a href="${l.href}" target="_blank" rel="noopener" class="contact-link">
            <span class="cl-icon">${l.icon}</span>
            <div>
              <div class="cl-label">${l.label}</div>
              <div class="cl-val">${l.val}</div>
            </div>
            <span class="cl-arr">→</span>
          </a>
        `).join("")}
      </div>
    `;
  }

  // Right: resume download card
  const right = document.getElementById("contact-right");
  if (right) {
    right.innerHTML = `
      <div class="resume-card">
        <div class="resume-icon">📄</div>
        <h3>One-Click Resume</h3>
        <p>
          No sign-up. No walls. Just the PDF — formatted, ATS-friendly,
          and ready for your hiring team.
        </p>
        <a href="./Vidhi_Kansara_Resume.pdf" class="btn-primary" download
           style="display:inline-flex; margin: 0 auto;">
          ↓ Download Resume PDF
        </a>
      </div>
    `;
  }
}

/* ══════════════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════════════ */
function renderFooter() {
  setText("footer-name", PORTFOLIO.meta.name);
  setText("footer-year", `© ${new Date().getFullYear()}`);
}

/* ══════════════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════════════ */
function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}
function setHTML(id, val) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = val;
}
