import React from 'react'
import Cv from '../../assets/dev BILLY CASTRO.pdf'
export const Cta = () => {
  return (
    <div className='cta'>
        <a href={Cv} download className='btn'>Descargar CV</a>
        <a href='tel:+57678567876' className='btn btn-prymary'>contáctame</a>
    </div>
  )
}

export default Cta;
