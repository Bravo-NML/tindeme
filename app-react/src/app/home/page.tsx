import styles from "../styles/page.module.css";
import NavigationMenu from "../ui/navigationMenu";
import СollectionHomepage from "./collection";

export default function Homepage() {  
  return (
    <main className={styles.pageDefault}>
      <NavigationMenu/>
      
      <div className={styles.tindimeLogo}>
        TINDIME UNREAL
      </div>

      <СollectionHomepage/>
    </main>
  );
}
