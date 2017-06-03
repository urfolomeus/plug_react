import React from 'react'

import './Cthulhu.css'
import cthulhuIcon from '../../../assets/images/cthulhu.jpg'

const Cthulhu = () =>
  <div>
    <h1 className='landing__header'>Cthulhu</h1>
    <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</p>
    <img src={cthulhuIcon} />
  </div>

export default Cthulhu
