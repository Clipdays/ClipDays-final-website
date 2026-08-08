"use client";

import { useState } from "react";

const navLinks = [
  ["Why ClipDays", "#why"],
  ["How it works", "#solution"],
  ["Cameras", "#cameras"],
  ["Sports", "#venues"],
  ["Partners", "#partners"],
  ["Team", "#team"],
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="logo" href="#top" aria-label="ClipDays home">
          <img src="/assets/clipdays-logo.png" alt="ClipDays" />
        </a>
        <div className="nav-links">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>
        <a className="nav-contact" href="#contact">
          Discuss your venue <span aria-hidden="true">↗</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </nav>
      <div id="mobile-navigation" className={`mobile-nav shell ${menuOpen ? "is-open" : ""}`}>
        {navLinks.map(([label, href]) => (
          <a key={href} href={href} onClick={closeMenu}>{label}</a>
        ))}
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </header>
  );
}
