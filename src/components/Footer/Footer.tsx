import Link from 'next/link'
import styles from './Footer.module.scss'
import Image from 'next/image'
import { Logo } from '../Logo/Logo'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container '>
        <div className={styles.wrapper}>
          <Link href='#' className={styles.logo}>
            <Logo />
          </Link>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              <button type='button' className={styles.linkBtn}>
                Контакти
              </button>
            </li>
            <li className={styles.linkItem}>
              <button type='button' className={styles.linkBtn}>
                Доставка і оплата
              </button>
            </li>
            <li className={styles.linkItem}>
              <button type='button' className={styles.linkBtn}>
                Соц мережі
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
