import Link from "next/link";
import SiteLayout from "@/components/SiteLayout";
import styles from "@/styles/portfolio.module.css";

export default function NotFoundPage() {
  return (
    <SiteLayout title="Page not found - Manuel Comi">
      <section className={`${styles.container} ${styles.pageHero}`}>
        <p className={styles.eyebrow}>404</p>
        <h1 className={styles.pageTitle}>This page is not part of the new portfolio.</h1>
        <p className={styles.pageLead}>
          The old portfolio had articles, snippets and website pages. This rebuild is focused on senior frontend case studies and current professional positioning.
        </p>
        <div className={styles.heroActions}>
          <Link className={styles.button} href="/work">
            View work
          </Link>
          <Link className={styles.buttonSecondary} href="/">
            Back home
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
