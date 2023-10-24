import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className='flex flex-col justify-center mt-3 bg-slate-100 opacity-80 py-4'>
      <div className="px-14">
        <label><FontAwesomeIcon icon={faLocationDot} /> Address : </label><br />
        <span>Kp. Maruga RT 005/04 Kel. Serua Kec. Ciputat Kota Tangerang Selatan</span>
      </div>
      <div className='px-14 mt-1 mb-1'>
        <label><FontAwesomeIcon icon={faAddressBook} /> No Tlp : </label>
        <span>0898-5511-216</span>
      </div>
      <div className='px-14 mt-1 text-center'>
        <label>Fikar Unpam | Copyright@2023</label>
      </div>
    </div>
  )
}

export default Footer