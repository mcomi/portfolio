import styles from "@/styles/portfolio.module.css";

type TagListProps = {
  items: string[];
  label?: string;
};

export default function TagList({ items, label = "Tags" }: TagListProps) {
  return (
    <ul className={styles.tagList} aria-label={label}>
      {items.map((item) => (
        <li className={styles.tag} key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
