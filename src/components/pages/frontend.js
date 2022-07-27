import React from 'react'
import './komp_savod.css'

function frontend() {
  return (
    
    <div  className='kopm_savod_container'>
      <div className='content'>
              <p ><span className='ommabop'>Ommabop kurs</span></p>
              <h2 className='content_header'>Frontend dasturlash asoslari (HTML5, CSS3, JavaScript)</h2>
          <div className='content_main'>
              <img src='images/html.png' alt='course' className='course-image'/>
              <p>200 000 so`m/oy</p>
              <p>Kurs Davomiyligi</p>
          </div>

        </div>
        <img src='images/frontend.jpg' alt='main' className='komp-image'/>
        <div className='info-komp'>
          <h2>Kurs haqida</h2>
          <p>
          "HTML5/CSS3/JavaSript" kursi HTML5, CSS3, JavaSript dasturlarini chuqur, professional darajada o'rganishga yo'naltirilgan, keyinchalik veb-dasturlashni (PHP, JavaScript) o'rganish uchun mustahkam asos yaratadi. Shuningdek, kurs kodning amal qilish muddati, brauzerlararo muvofiqlik, qidiruv tizimini optimallashtirish, qidiruv tizimlarida veb-saytlarni targ'ib qilish kabi tushunchalarni o'rgatadi.


          O’quv kursi tugagach, vizitka yoki Internet-do'kon kabi sodda va murakkab saytlarni yaratish, mavjud internet loyihalarni to'ldirish uchun yetarli bilimga ega bo'lasiz.  
          </p>
          <div className='komp-table'>
          <h2>O'qish davomida siz quyidagilarni o'rganasiz:</h2>
            <p className='table-text'><span className='table-span'></span> tashrif buyuruvchilar uchun jozibali, tushunarli va foydalanishga qulay tuzilmaga ega veb sahifa maketlarini noldan yaratish (Usability);</p> 
            <p className='table-text'><span className='table-span'></span> HTML/CSS dan foydalanib saytni joylashtirish, saytga havolalar, jadvallar, shakllar, grafik elementlar: tugmalar, bannerlar, flesh elementlarni joylashtirish</p> 
            <p className='table-text'><span className='table-span'></span>jQuery kutubxonasi elementlarini sahifaga ulash;</p> 
            <p className='table-text'><span className='table-span'></span> HTML5, CSS3 va JavaSript imkoniyatlarini ko'rib chiqish;</p> 
            <p className='table-text'><span className='table-span'></span> DIV tartibi, biriktirilgan/rezina sahifasi, brauzerlararo muvofiqlik, kodning amal qilish muddati qanday ekanligini bilib olasiz;</p> 
            <p className='table-text'><span className='table-span'></span> veb-saytni Internetda ro'yxatdan o'tkazish va targ'ib qilish (amaliy)ni o’rganasiz.</p> 
            
          </div>

        </div>
    </div>
  )
}

export default frontend
