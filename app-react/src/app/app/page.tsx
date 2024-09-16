import styles from "../styles/page.module.css";
import stylesApp from "../styles/app.module.css";
import NavigationMenu from "../ui/navigationMenu";
import CardApp from "./cardApp";

interface animeInfoInterface {
  name: string,
  img: string | null,
  isOngoing: boolean,
  dateFrom: number,
  dateTo: number | null,
  info: string,
}

interface charInfoInterface {
  name: string,
  animeList: animeInfoInterface[],
  info: string,
}

const charInfo: charInfoInterface = {
  name: "Sakura",
  animeList: [{
    name: "Naruto",
    img: null,
    isOngoing: false,
    dateFrom: 2010,
    dateTo: 2020,
    info: "Naruto is the best anime ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever"
  },{
    name: "Naruto 2",
    img: null,
    isOngoing: false,
    dateFrom: 2010,
    dateTo: 2020,
    info: "Naruto is the best anime ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever"
  },{
    name: "Naruto 3",
    img: null,
    isOngoing: false,
    dateFrom: 2010,
    dateTo: 2020,
    info: "Naruto is the best anime ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever"
  },],
  info: "Sakura is the best girl ever ever ever ever ever ever ever ever ever ever ever ever",
}

export default function MainApp() {
  return (
    <main className={styles.pageDefault + ' ' + stylesApp.pageApp}>
      <NavigationMenu/>
      
      <CardApp charInfo={charInfo}/>
    </main>
  );
}