import Link from 'next/link'
import styles from "../styles/page.module.css";

interface navigationLink {
  url: string;
  name: string;
}

const NAVIGATION_LINKS: navigationLink[] = [
  {
    url: '/home',
    name: 'Home'
  },
  {
    url: '/app',
    name: 'Tindime'
  },
  {
    url: '/collection',
    name: 'My collection'
  },
]

const navigationElements = NAVIGATION_LINKS.map((link: navigationLink) => {
  return <Link className={styles.navigationLink} key={link.name} href={link.url}>{link.name}</Link>
})

export default function NavigationMenu() {
  return (
    <div className={styles.navigationMenu}>
      {navigationElements}
    </div>
  )
}