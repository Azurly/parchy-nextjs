import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  CloudOff,
  Compass,
  Feather,
  FileText,
  Globe2,
  History,
  Layers3,
  Lightbulb,
  ListChecks,
  Quote,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Header from "./components/header";
import Pricing from "./components/pricing";

export const metadata: Metadata = {
  title: "Parchy | Votre atelier d’écriture de roman",
  description:
    "De la première idée au manuscrit, Parchy vous accompagne pour concevoir votre roman, organiser votre univers et écrire à votre rythme.",
  keywords: [
    "atelier d’écriture",
    "écrire un roman",
    "plan de roman",
    "fiche personnage",
    "outil écrivain",
    "écriture de fiction",
  ],
  openGraph: {
    title: "Parchy | Votre atelier d’écriture de roman",
    description:
      "Votre univers, votre plan et votre manuscrit réunis dans un même atelier.",
    locale: "fr_FR",
    type: "website",
    images: ["/og-parchy.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parchy | Votre atelier d’écriture de roman",
    description:
      "Votre univers, votre plan et votre manuscrit réunis dans un même atelier.",
    images: ["/og-parchy.svg"],
  },
};

const faqs = [
  {
    question: "Parchy est-il fait pour les auteurs débutants ?",
    answer:
      "Oui. Les parcours guidés vous aident à avancer étape par étape, sans imposer une méthode unique. Vous pouvez aussi commencer directement par votre univers, votre plan ou votre manuscrit.",
  },
  {
    question: "Puis-je utiliser ma propre méthode d’écriture ?",
    answer:
      "Bien sûr. Les méthodes proposées sont des repères, pas des règles. Vous gardez la main sur votre manière de concevoir et de raconter votre histoire.",
  },
  {
    question: "Mon manuscrit est-il sauvegardé automatiquement ?",
    answer:
      "Votre travail est enregistré au fil de l’écriture. L’atelier est aussi pensé pour vous permettre de continuer à écrire hors ligne, puis de retrouver vos changements lors de la synchronisation.",
  },
  {
    question: "Est-ce que Parchy écrit à ma place ?",
    answer:
      "Non. Parchy est un espace pour organiser vos idées et écrire votre roman. Vos personnages, vos choix et vos phrases restent les vôtres.",
  },
  {
    question: "Puis-je exporter mon roman ?",
    answer:
      "Les exports en formats DOCX, PDF et EPUB font partie des fonctionnalités prévues. Leur disponibilité et les formats inclus dépendront de l’offre proposée au lancement.",
  },
  {
    question: "Les tarifs sont-ils définitifs ?",
    answer:
      "Non. Les montants affichés sur cette page sont des propositions de lancement et pourront évoluer. Les tarifs définitifs seront communiqués avant l’ouverture des abonnements.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const features = [
  {
    icon: Lightbulb,
    tone: "ochre",
    title: "Une idée qui prend forme",
    text: "Des étapes guidées pour donner une direction à votre histoire, sans brider votre imagination.",
  },
  {
    icon: Globe2,
    tone: "sage",
    title: "Un univers bien à vous",
    text: "Rassemblez personnages, lieux, objets et relations. Gardez les détails importants à portée de plume.",
  },
  {
    icon: Compass,
    tone: "blue",
    title: "Un plan qui respire",
    text: "Découpez votre roman en parties, chapitres et scènes. Réorganisez votre récit quand il évolue.",
  },
  {
    icon: Feather,
    tone: "rose",
    title: "Le plaisir d’écrire",
    text: "Un éditeur pensé pour le manuscrit, avec sauvegarde automatique et accès hors ligne.",
  },
  {
    icon: History,
    tone: "sage",
    title: "Vos versions en mémoire",
    text: "Retrouvez l’historique de votre travail et avancez avec plus de sérénité.",
  },
  {
    icon: Target,
    tone: "ochre",
    title: "Un rythme qui vous ressemble",
    text: "Fixez un objectif de mots et voyez votre progression, sans transformer l’écriture en course.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="accueil">
          <div className="hero-inner page-width">
            <div className="hero-copy">
              <p className="eyebrow"><span /> VOTRE ATELIER D’ÉCRITURE</p>
              <h1>
                Votre roman,
                <br />
                <em>à votre rythme.</em>
              </h1>
              <p className="hero-lede">
                De la première idée au dernier chapitre, rassemblez tout ce qui
                fait votre histoire dans un espace pensé pour écrire.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#tarifs">
                  Découvrir Parchy <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a className="text-link" href="#atelier">
                  Visiter l’atelier <ArrowDown size={16} aria-hidden="true" />
                </a>
              </div>
              <div className="hero-note">
                <span className="note-mark"><Feather size={15} /></span>
                <span>Vos idées. Vos mots. Votre histoire.</span>
              </div>
            </div>

            <div className="atelier-scene" aria-label="Aperçu de l’atelier Parchy">
              <div className="scene-paper" />
              <div className="app-preview">
                <aside className="preview-sidebar">
                  <div className="preview-brand"><BookOpen size={15} /> <b>parchy<span>.</span></b></div>
                  <p className="preview-label">MON ROMAN</p>
                  <div className="preview-nav active"><FileText size={14} /> Manuscrit</div>
                  <div className="preview-nav"><Globe2 size={14} /> Univers</div>
                  <div className="preview-nav"><ListChecks size={14} /> Plan</div>
                  <div className="preview-bottom"><span /> Enregistré</div>
                </aside>
                <div className="preview-editor">
                  <div className="editor-topline"><span>Chapitre 01</span><span className="saved-dot"><Check size={11} /> Sauvegardé</span></div>
                  <article className="manuscript-page">
                    <span className="chapter-kicker">PREMIÈRE PARTIE</span>
                    <h2>La maison aux<br />volets verts</h2>
                    <span className="chapter-rule" />
                    <p>La pluie avait cessé juste avant l’aube. Dans le jardin, les herbes hautes retenaient encore quelques gouttes de lumière…</p>
                    <p>Élise posa la main sur la poignée. Elle n’était pas revenue depuis douze ans.</p>
                    <span className="typing-caret" />
                  </article>
                </div>
              </div>
              <div className="book-cover" aria-hidden="true">
                <div className="book-arch" />
                <div className="book-cover-copy"><span>UN ROMAN DE</span><b>Les jours<br />d’après</b><i /></div>
              </div>
              <div className="scene-caption"><span>01</span> Un endroit à vous pour faire grandir vos histoires</div>
            </div>
          </div>
          <div className="hero-bottom page-width">
            <span>IMAGINER</span><i /><span>ORGANISER</span><i /><span>ÉCRIRE</span>
            <span className="hero-bottom-note">Un seul atelier, tout au long du chemin.</span>
          </div>
        </section>

        <section className="intro-band" id="atelier">
          <div className="intro-inner page-width">
            <p className="eyebrow"><span /> L’ESPRIT PARCHY</p>
            <div className="intro-content">
              <h2>Un roman se construit<br />bien avant la première page.</h2>
              <div>
                <p>Une idée, des personnages, mille notes éparpillées… Parchy les réunit au même endroit pour que vous puissiez passer de l’envie d’écrire à l’histoire que vous portez.</p>
                <a className="text-link" href="#fonctionnalites">Découvrir l’atelier <ArrowRight size={16} /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-section page-width" id="fonctionnalites">
          <div className="section-heading">
            <p className="eyebrow"><span /> TOUT PREND SA PLACE</p>
            <h2>Les pièces de votre histoire,<br /><em>enfin réunies.</em></h2>
            <p>Un espace clair pour penser, construire et écrire. Vous avancez comme vous le souhaitez.</p>
          </div>
          <div className="feature-grid">
            {features.map(({ icon: Icon, tone, title, text }, index) => (
              <article className="feature-item" key={title}>
                <div className={`feature-icon ${tone}`}><Icon size={21} strokeWidth={1.8} /></div>
                <span className="feature-index">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="method-section" id="methode">
          <div className="method-inner page-width">
            <div className="method-copy">
              <p className="eyebrow"><span /> UN CHEMIN, PAS UNE RECETTE</p>
              <h2>Avancez avec un fil conducteur. <em>Gardez votre liberté.</em></h2>
              <p>Choisissez une méthode pour vous lancer, ou piochez simplement les questions qui vous aident. Votre roman n’a pas à rentrer dans une formule.</p>
              <a className="text-link" href="#options">Voir les possibilités <ArrowRight size={16} /></a>
            </div>
            <div className="method-list">
              <article className="method-row"><span className="method-number">01</span><div><h3>La méthode flocon</h3><p>Faites grandir votre idée, du résumé aux scènes.</p></div><ArrowRight size={17} /></article>
              <article className="method-row"><span className="method-number">02</span><div><h3>La structure en trois actes</h3><p>Donnez un mouvement lisible à votre intrigue.</p></div><ArrowRight size={17} /></article>
              <article className="method-row"><span className="method-number">03</span><div><h3>Le voyage du héros</h3><p>Explorez les étapes d’une transformation.</p></div><ArrowRight size={17} /></article>
              <p className="method-footnote"><Sparkles size={14} /> Et surtout, votre propre façon de faire.</p>
            </div>
          </div>
        </section>

        <section className="details-section page-width" id="options">
          <div className="details-title">
            <p className="eyebrow"><span /> LES BONS OUTILS, AU BON MOMENT</p>
            <h2>De la première note<br />au manuscrit terminé.</h2>
          </div>
          <div className="details-list">
            <article><span className="detail-icon"><Users size={19} /></span><div><h3>Fiches d’univers</h3><p>Personnages, lieux, objets, groupes et relations.</p></div><Check size={17} /></article>
            <article><span className="detail-icon copper"><Layers3 size={19} /></span><div><h3>Plan par scènes</h3><p>Parties, chapitres et scènes à organiser librement.</p></div><Check size={17} /></article>
            <article><span className="detail-icon blue"><CloudOff size={19} /></span><div><h3>Écriture hors ligne</h3><p>Retrouvez votre espace même sans connexion.</p></div><Check size={17} /></article>
            <article><span className="detail-icon rose"><History size={19} /></span><div><h3>Historique & progression</h3><p>Versions, objectifs de mots et repères personnels.</p></div><Check size={17} /></article>
          </div>
        </section>

        <section className="quote-section">
          <div className="quote-inner page-width">
            <Quote size={25} strokeWidth={1.4} />
            <blockquote>« Écrire un roman, c’est tenir compagnie à une histoire jusqu’à ce qu’elle soit prête à partir. »</blockquote>
            <p>UNE INVITATION À PRENDRE LE TEMPS</p>
          </div>
          <div className="quote-decoration" aria-hidden="true">P.</div>
        </section>

        <section className="reviews-section page-width" id="avis">
          <div className="reviews-mark"><Feather size={21} /></div>
          <div><p className="eyebrow"><span /> LES MOTS DES AUTEURS</p><h2>Vos histoires méritent<br />un bel endroit.</h2></div>
          <div className="reviews-note"><p>Parchy prépare son ouverture. Les premiers retours d’auteurs seront partagés ici dès qu’ils seront disponibles.</p><span>Pas encore d’avis publiés</span></div>
        </section>

        <Pricing />

        <section className="faq-section page-width" id="faq">
          <div className="faq-heading"><p className="eyebrow"><span /> AVANT DE VOUS LANCER</p><h2>Quelques réponses<br /><em>pour commencer.</em></h2><p>Une autre question ? Écrivez-nous, nous serons heureux de vous répondre.</p><a className="text-link" href="mailto:bonjour@parchy.fr">Nous contacter <ArrowRight size={16} /></a></div>
          <div className="faq-list">
            {faqs.map(({ question, answer }) => (
              <details className="faq-item" key={question}>
                <summary>{question}<span className="faq-toggle" aria-hidden="true" /></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="closing-cta">
          <div className="closing-inner page-width">
            <p className="eyebrow"><span /> À VOUS D’ÉCRIRE</p>
            <h2>Votre histoire<br /><em>commence quelque part.</em></h2>
            <p>Offrez-lui un atelier où chaque idée peut trouver sa place.</p>
            <a className="button button-light" href="#tarifs">Trouver votre formule <ArrowRight size={17} /></a>
            <span className="closing-flourish" aria-hidden="true">✳</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main page-width">
          <a className="brand footer-brand" href="#accueil" aria-label="Parchy, accueil"><span className="brand-icon"><BookOpen size={19} strokeWidth={2.2} /></span><span className="brand-word">parchy<span>.</span></span></a>
          <p>L’atelier d’écriture de roman,<br />de l’idée au manuscrit.</p>
          <nav aria-label="Navigation de pied de page"><a href="#fonctionnalites">Fonctionnalités</a><a href="#tarifs">Tarifs</a><a href="#faq">FAQ</a><a href="mailto:bonjour@parchy.fr">Contact</a></nav>
        </div>
        <div className="footer-bottom page-width"><span>© 2026 Parchy · Amélie Florent & Nathan Hemery</span><span><a href="#mentions">Mentions légales</a><a href="#confidentialite">Confidentialité</a></span></div>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}