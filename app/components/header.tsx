"use client";

import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["L’atelier", "#atelier"],
  ["Fonctionnalités", "#fonctionnalites"],
  ["Tarifs", "#tarifs"],
  ["FAQ", "#faq"],
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner page-width">
        <a className="brand" href="#accueil" aria-label="Parchy, accueil" onClick={() => setIsOpen(false)}>
          <span className="brand-icon"><BookOpen size={19} strokeWidth={2.2} /></span>
          <span className="brand-word">parchy<span>.</span></span>
        </a>
        <nav className={`main-nav ${isOpen ? "is-open" : ""}`} aria-label="Navigation principale">
          {links.map(([label, href]) => <a href={href} key={href} onClick={() => setIsOpen(false)}>{label}</a>)}
          <a className="button button-primary nav-cta" href="#tarifs" onClick={() => setIsOpen(false)}>Commencer <span>→</span></a>
        </nav>
        <button className="menu-toggle" type="button" aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}