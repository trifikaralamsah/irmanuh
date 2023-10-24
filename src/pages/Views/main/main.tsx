import React, { useEffect, useState } from 'react'
import Header from '../common/header'
import Footer from '../common/footer'
import {Undangan, LogoIrmanuh, LogoMasjid, Mahlulqiyam} from '../../../assets'
import ReactAudioPlayer from 'react-audio-player';
import Particless from '../../../components/molecules/particless';
import CountdownDate from '../../../components/molecules/countdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from 'react-router-dom';


const Main = () => {

  const [openInvitation, setOpenInvitation] = useState<boolean>(false);
  const [openClass, setOpenClass] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const [name, setName] = useState<any>('');
  console.log(name)
  const clickOpenInvitaion = () => {
    // let inv = !openInvitation;
    setOpenClass(true);
    setTimeout(() => {
      setOpenInvitation(true);
    }, 700);
  };

  useEffect(() => {
    console.log(openInvitation)
    setName(searchParams.get('for'));
  }, [openInvitation, searchParams])
  

  return (
    <React.Fragment>
      {!openInvitation ? (
        <div className={`bg-cover_undangan w-screen h-screen bg-contain xl:bg-cover ${ openClass ?'animate-pulse' : ''}`}>
            <div className='flex flex-col items-center '>
              <div className="mt-11 w-9/12 text-center font-bold ">
                <span>UNDANGAN</span><br />
                <span className='italic font-serif'>PERINGATAN MAULID NABI MUHAMMAD SAW</span><br />
                <span className='italic'>1445 H</span>
              </div>
              <div className="flex justify-evenly w-full mt-4">
                <div className="flex shadow-2xl bg-white rounded-full">
                  <img className="h-[59px] rounded-full self-center shadow-2xl" src={LogoMasjid} alt='Logo Masjid' />
                </div>
                <div className="shadow-2xl rounded-full">
                  <img className="rounded-full h-20 shadow-2xl" src={LogoIrmanuh} alt='Logo Irmanuh' />
                </div>
              </div>
              <div className='mt-4 font-serif text-center'>
                <span className='italic font-bold font-serif'>IRMANUH</span><br />
                <span className=''>IKATAN REMAJA MASJID NURUL HIKMAH</span>
              </div>
              <div className=" rounded-xl bg-slate-100  text-center mt-11 w-8/12 p-2">
                <span className='font-serif'>Kepada Yth. </span><br></br>
                {name ? (
                  <span>{name}</span>
                ) : <span>Tamu Undangan</span>}
              </div>
              <div className='bg-white w-1/2  mt-5 bottom-5 shadow-2xl text-center rounded-xl hover:bg-slate-600 border border-slate-600 cursor-pointer'>
                <button className='w-full py-[4px]' onClick={clickOpenInvitaion}><span>Buka Undangan</span></button>
              </div>
            </div>
          {/* <Footer /> */}
        </div>
      ) : (
        <div className="wrapper w-screen h-screen">
          <Header />
            <ReactAudioPlayer
              src={Mahlulqiyam}
              autoPlay
              controls
              loop={true}
              style={{display:"none"}}
            />
          <div className='shadow-xl'>
            <img src={Undangan} alt='Isi undangan'></img>
          </div>
          <div className='bg-slate-100 mt-9 text-center py-4 rounded-lg shadow-2xl font-serif'>
            <label className='text-center'>Acara Pelaksanaan Akan Dimulai Dalam</label>
            <CountdownDate />
          </div>
          <div className="mt-14">
            <div className="text-center mb-5 bg-slate-100 py-3 rounded-xl">
              <span className='font-bold text-lg'>Maps Location</span>
            </div>
            <iframe title='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.556898526465!2d106.70462907288984!3d-6.321781961856409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5e2b0502b29%3A0x7074eb15717d5a01!2sMasjid%20nurul%20hikmah!5e0!3m2!1sen!2sid!4v1697358545649!5m2!1sen!2sid" width="100%" height="420" loading="lazy" className='border-none'></iframe>
          </div>
          <div className='bg-yellow-100 opacity-90 mt-5 p-4 rounded-2xl'>
            <div className='bg-green-900 p-4 text-white'>
              <label>Bagi yang ingin infaq/shodaqoh</label><br />
              <span>Dapat disalurkan melalui :</span><br />
              <span>* BCA : </span>
              <span className='font-bold'>4730837301   </span><FontAwesomeIcon icon={faCopy} className='cursor-pointer' onClick={() => {navigator.clipboard.writeText('4730837301')}} /><br />
              <span>A/N. Syahru Ramadhan</span>
            </div>
          </div>
          <Footer />
          <div style={{zIndex:'-1', position:'fixed'}}>
            < Particless />
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default Main