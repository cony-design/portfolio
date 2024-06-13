import styles from './Navbar.module.scss'

export default function Navbar() {
  return (
      <nav className={styles.Navbar}>
          <ul>
            <li><a href="./index.html">WebSite</a></li>
            <li><a href="./index.html">TOP</a></li>
            <li><a href="./contact.html">CONTACT</a></li>
          </ul>
      </nav>
  )
}
