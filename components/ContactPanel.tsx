import { profile } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export default function ContactPanel() {
  return (
    <div className={styles.contactCard}>
      <p className={styles.eyebrow}>Recruiter CTA</p>
      <h3>Looking for a senior frontend engineer who can work across product, architecture and delivery?</h3>
      <p>
        I am especially interested in roles involving React/Next.js platforms,
        design systems, AI product experiences, modernization and international
        engineering teams.
      </p>
      <div className={styles.heroActions}>
        <a className={styles.button} href={`mailto:${profile.email}`}>
          Email Manuel
        </a>
        <a className={styles.buttonSecondary} href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
}
