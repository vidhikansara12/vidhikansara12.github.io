"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-5">
        <a
          href="#"
          className="font-heading text-base font-semibold tracking-tight text-foreground transition-opacity duration-hover hover:opacity-70"
        >
          Vidhi Kansara
        </a>

        {/* Desktop */}
        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] text-muted transition-colors duration-hover hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-muted transition-colors duration-hover hover:text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="border-t border-border/50 bg-background/95 px-6 pb-5 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block py-2.5 text-sm text-muted transition-colors duration-hover hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
