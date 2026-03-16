/**
 * MAIN.JS — App Initialisation & Interactions
 * Responsibilities:
 *   1. Boot: call all render functions in order
 *   2. Scroll reveal: IntersectionObserver on .reveal elements
 *   3. Nav: sticky blur on scroll + active link highlighting
 *   4. Mobile nav: hamburger drawer open/close
 *   5. Project footer layout fix (live-link alignment)
 */

document.addEventListener("DOMContentLoaded", () => {
  boot();
  initScrollReveal();
  initNavScroll();
  initNavHighlight();
  initMobileNav();
});

/* ══════════════════════════════════════════════════════
   1. BOOT — render all sections in order
══════════════════════════════════════════════════════ */
function boot() {
  renderMeta();
  renderNav();
  renderHero();
  renderExperience();
  renderProjects();
  renderRoadmap();
  renderSkills();
  renderCertifications();
  renderAbout();
  renderContact();
  renderFooter();
}

/* ══════════════════════════════════════════════════════
   2. SCROLL REVEAL
   Staggered fade-up on all .reveal elements.
   Uses IntersectionObserver — no library needed.
══════════════════════════════════════════════════════ */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -36px 0px" }
  );

  // Small delay so render() has flushed all DOM writes
  setTimeout(() => {
    document.querySelectorAll(".reveal").forEach((el, i) => {
      // Stagger siblings within the same parent
      const siblings = Array.from(el.parentElement.querySelectorAll(".reveal"));
      const sibIndex = siblings.indexOf(el);
      el.style.transitionDelay = `${Math.min(sibIndex * 0.07, 0.4)}s`;
      observer.observe(el);
    });
  }, 80);
}

/* ══════════════════════════════════════════════════════
   3. NAV SCROLL — add blur/border when page scrolls
══════════════════════════════════════════════════════ */
function initNavScroll() {
  const nav = document.getElementById("nav");
  if (!nav) return;

  const toggle = () => nav.classList.toggle("scrolled", window.scrollY > 24);
  toggle();
  window.addEventListener("scroll", toggle, { passive: true });
}

/* ══════════════════════════════════════════════════════
   4. NAV HIGHLIGHT — active link follows scroll position
══════════════════════════════════════════════════════ */
function initNavHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const links    = document.querySelectorAll(".nav-link");
  if (!sections.length || !links.length) return;

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((a) => a.classList.remove("active"));
          const match = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
          if (match) match.classList.add("active");
        }
      });
    },
    { threshold: 0.35 }
  );

  sections.forEach((s) => obs.observe(s));
}

/* ══════════════════════════════════════════════════════
   5. MOBILE NAV — hamburger drawer
══════════════════════════════════════════════════════ */
function initMobileNav() {
  const hamburger = document.getElementById("hamburger");
  const navLinks  = document.getElementById("nav-links");
  const overlay   = document.getElementById("nav-overlay");
  if (!hamburger || !navLinks || !overlay) return;

  function open() {
    navLinks.classList.add("open");
    overlay.classList.add("visible");
    hamburger.classList.add("open");
    hamburger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function close() {
    navLinks.classList.remove("open");
    overlay.classList.remove("visible");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", () =>
    navLinks.classList.contains("open") ? close() : open()
  );

  overlay.addEventListener("click", close);

  // Close on any nav link tap (smooth scroll will handle the jump)
  document.querySelectorAll(".nav-link").forEach((link) =>
    link.addEventListener("click", close)
  );

  // Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  // Show overlay when needed
  overlay.style.display = "block";
}
