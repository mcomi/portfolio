import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { profile } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

type SiteLayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function SiteLayout({
  children,
  title = "Manuel Comi - Senior Frontend Engineer",
  description = profile.subheadline,
}: SiteLayoutProps) {
  const router = useRouter();
  const canonical = `https://mcomix.vercel.app${router.asPath}`;

  return (
    <div className={styles.shell}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="follow, index" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Manuel Comi Portfolio" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://mcomix.vercel.app/og.svg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className={styles.nav}>
        <div className={styles.navInner}>
          <Link className={styles.brand} href="/" aria-label="Manuel Comi home">
            <span className={styles.brandMark}>MC</span>
            <span>Manuel Comi</span>
          </Link>
          <nav className={styles.navLinks} aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main id="main">{children}</main>
      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerInner}`}>
          <span>
            Senior Frontend Engineer based in {profile.location}. Built for
            recruiters, hiring managers and technical leaders.
          </span>
          <div className={styles.linkList}>
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
