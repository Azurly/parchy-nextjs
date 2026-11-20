"use client";

import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="pricing-section" id="tarifs">
      <div className="pricing-inner page-width">
        <div className="pricing-heading">
          <p className="eyebrow"><span /> UNE FORMULE POUR CHAQUE HISTOIRE</p>
          <h2>Commencez simplement.<br /><em>Voyez où vos mots vous mènent.</em></h2>
          <p>Choisissez votre espace, vous pourrez toujours changer d’avis.</p>
          <div className="billing-switch" role="group" aria-label="Période de facturation">
            <button type="button" className={!annual ? "selected" : ""} aria-pressed={!annual} onClick={() => setAnnual(false)}>Mensuel</button>
            <button type="button" className={annual ? "selected" : ""} aria-pressed={annual} onClick={() => setAnnual(true)}>Annuel <span>- 2 mois</span></button>
          </div>
        </div>
        <div className="price-cards">
          <article className="price-card">
            <p className="plan-kicker">POUR PRENDRE LE TEMPS</p>
            <h3>Gratuit</h3>
            <p className="plan-summary">Pour commencer à construire votre histoire.</p>
            <div className="price"><strong>0 €</strong><span>/ toujours</span></div>
            <a className="button button-secondary" href="mailto:bonjour@parchy.fr?subject=Acc%C3%A8s%20Parchy">Découvrir l’offre <ArrowRight size={16} /></a>
            <ul><li><Check /> Un projet de roman</li><li><Check /> Fiches d’univers & plan</li><li><Check /> Éditeur avec sauvegarde</li><li><Check /> Objectifs d’écriture</li></ul>
          </article>
          <article className="price-card featured-price">
            <span className="plan-ribbon">POUR ALLER PLUS LOIN</span>
            <p className="plan-kicker">VOTRE ESPACE COMPLET</p>
            <h3>Premium</h3>
            <p className="plan-summary">Pour donner toute la place à vos projets.</p>
            <div className="price"><strong>{annual ? "5,90" : "6,90"} €</strong><span>/ mois{annual ? " · facturé par an" : ""}</span></div>
            <a className="button button-primary" href="mailto:bonjour@parchy.fr?subject=Acc%C3%A8s%20Parchy%20Premium">Choisir Premium <ArrowRight size={16} /></a>
            <ul><li><Check /> Projets de romans illimités</li><li><Check /> Tout l’espace de conception</li><li><Check /> Historique des versions</li><li><Check /> Exports de votre manuscrit</li><li><Check /> Partage en lecture seule</li></ul>
          </article>
        </div>
        <p className="pricing-disclaimer">Tarifs indicatifs, à confirmer avant l’ouverture des abonnements. Aucune commande n’est effectuée sur cette page.</p>
      </div>
    </section>
  );
}