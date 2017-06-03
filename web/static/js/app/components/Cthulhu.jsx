import React from 'react'

import styles from './Cthulhu.css'
import cthulhuIcon from '../../../assets/images/cthulhu.jpg'

const Cthulhu = () =>
  <div>
    <h1 className={styles.header}>Cthulhu</h1>
    <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</p>
    <img src={cthulhuIcon} />
  </div>

export default Cthulhu
