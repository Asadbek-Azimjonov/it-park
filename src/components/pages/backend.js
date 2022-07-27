import React from 'react'
import './komp_savod.css'


function backend() {
  return (
    <div  className='kopm_savod_container'>
    <div className='content'>
            <p ><span className='ommabop'>Ommabop kurs</span></p>
            <h2 className='content_header'>Backend dasturlash asoslari </h2>
        <div className='content_main'>
            <img src='images/backendlogo.jpg' alt='course' className='course-image'/>
            <p>200 000 so`m/oy</p>
            <p>Kurs Davomiyligi</p>
        </div>

      </div>
      <img src='images/backendmain.jpeg' alt='main' className='komp-image'/>
      <div className='info-komp'>
        <h2>Kurs haqida</h2>
        <p>
        Python bu kelajak dasturlash tili bo’lib, kelajakda u insonlarga ulkan, ishonchli, samarali va tez ishlaydigan texnologiyalarni yaratishda asosiy yordamchiga aylanadi. So’nggi olib borilgan izlanishlarga ko’ra, Python ilk bor ommaga taqdim etilgandan buyon dasturchilar o’rtasida umumiy hisobda 4,5 barobar o’sish ko’rsatgichini va dasturlash olamiga 40.000 dan ortiq yangi ish o’rinlarini olib kira olgan til hisoblanadi.
        </p>
        

      </div>
  </div>
  )
}

export default backend
