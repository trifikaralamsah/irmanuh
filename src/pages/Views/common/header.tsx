import React from 'react'
import { LogoIrmanuh } from '../../../assets'
import { LogoMasjid } from '../../../assets'

const Header = () => {
  return (
    <div className='flex w-screen h-12 justify-evenly'>
      <div className='self-center'>
        <img src={LogoMasjid} alt="Logo Masjid" width={40} height={40}/>
      </div>
      <div className='self-center'>
        <p className='font-serif leading-3'>Ikatan Remaja Masjid Nurul Hikmah<br/>
        <span className='font-sans text-sm'>Kp. Maruga 05/04, Serua, Tangerang Selatan.</span></p>
      </div>
      <div className='self-center'>
        <img src={LogoIrmanuh} alt="Logo Irmanuh" width={40} height={40}/>
      </div>
    </div>
  )
}

export default Header