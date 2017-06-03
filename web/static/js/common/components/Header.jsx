import React from 'react'

import styles from './Header.css'
import cthulhuIcon from '../../../assets/images/cthulhu-white.svg'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerWrapper}>
      <img src={cthulhuIcon} className={styles.icon} alt="Mad Monk logo" />
      <h1 className={styles.headerText}>Mad Monk</h1>
    </div>
  </header>
 )

export default Header
