import styles from "../styles/page.module.css";
import NavigationMenu from "../ui/navigationMenu";

export default function UserCollection() {
  return (
    <main className={styles.pageDefault}>
      <NavigationMenu/>
      
      <p>
        COLLECTION
      </p>
    </main>
  );
}