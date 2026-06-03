import { profile } from "@/data/portfolio";
import styles from "@/styles/portfolio.module.css";

export default function ContactPanel() {
  return (
    <div className={styles.contactCard}>
      <p className={styles.eyebrow}>Recruiter CTA</p>
      <h3>Looking for a senior frontend engineer who can work across product, architecture and delivery?</h3>
      <p>
        Best fit: Senior Frontend, Lead Frontend, AI Product Frontend and
        platform/frontend architecture roles with remote or international teams.
      </p>
      <div className={styles.heroActions}>
        <a className={styles.button} href={`mailto:${profile.email}`}>
          Email Manuel
        </a>
        <a className={styles.buttonSecondary} href={profile.resumePath}>
          Download Resume
        </a>
        <a className={styles.buttonSecondary} href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
}
