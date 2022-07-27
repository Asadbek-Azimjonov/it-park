import React from 'react'
import './komp_savod.css'


function komp_savod() {
  return (
    <div className='kopm_savod_container'>
        <div className='content'>
              <p ><span className='ommabop'>Ommabop kurs</span></p>
              <h2 className='content_header'>Kompyuter Savodxonligi</h2>
          <div className='content_main'>
              <img src='images/course1.png' alt='course' className='course-image'/>
              <p>200 000 so`m/oy</p>
              <p>Kurs Davomiyligi</p>
          </div>

        </div>
        <img src='images/komp-savod-word.png' alt='main' className='komp-image'/>
        <div className='info-komp'>
          <h2>Kompyuter savodxonligi nima uchun?</h2>
          <p>
            Endi siz kompyutersiz yashay olmaysiz. Nafaqat ishga joylashish, balki ishlashni davom ettirish uchun ham bilimini tasdiqlash kerak. Yigirma yoki o'ttiz yil ishlagan xodimlar kompyuter bilimi imtihonlarini topshirishlari kerak bo'ladi. Va bu muhim emas - fan nomzodi, doktor, professor ... Agar o'tmagan bo'lsangiz - boshqa ish qidiring. Ammo muammo shundaki, ko'p odamlar kompyuter bilan ishlaydiganlar faqat o'zlari ishlaydigan ilovalarni bilishadi va boshqa narsadagi eng oddiy vazifani bajara olmaydilar, ular kompyuter texnologiyalari mantiqini tushunmaydilar. Xo'sh, shuningdek, terminologiyani bilmaslik, "bu erda ular menga bu tugmani bosishni ko'rsatdilar" tamoyiliga ko'ra. Shunday qilib, hatto noutbukidan tushmaydiganlar ham kompyuterni bilmaydigan bo'lib chiqadilar. Aytgancha, bu yoshlarga ham tegishli - ko'pincha VK-ni bir necha kun ko'rgan yigitlar Word-dagi shrift hajmini shunchaki o'zgartira olmaydi yoki oddiy taqdimot qila olmaydi.
            “Kompyuter savodxonligi” tushunchasiga nimalar kiradi?
              Ta'rifga ko'ra, bu ishlash uchun zarur bo'lgan bilim va ko'nikmalar to'plamidir kompyuter texnologiyasi. Batafsil ta'kidlashimiz mumkin:
          </p>
          <div className='komp-table'>
            <p className='table-text'><span className='table-span'> </span> kompyuter qurilmasini bilish;</p> 
            <p className='table-text'><span className='table-span'> </span> parametrlarga muvofiq kerakli shaxsiy kompyuterni tanlash imkoniyati;</p> 
            <p className='table-text'><span className='table-span'> </span> bilim tashqi qurilmalar va ularni ulash qobiliyati;</p> 
            <p className='table-text'><span className='table-span'> </span> hech bo'lmaganda bilim operatsion tizim derazalar;</p> 
            <p className='table-text'><span className='table-span'> </span> Asosiy Office dasturlarini bilish - Word, Excell, PowerPoint;</p> 
            <p className='table-text'><span className='table-span'> </span> ularning yangi versiyalarini o'zlashtirish qobiliyati;</p> 
            <p className='table-text'><span className='table-span'> </span> yangi ilovalarni o'rnatish va o'zlashtirish qobiliyati;</p> 
            <p className='table-text'><span className='table-span'> </span> Internetda ishlash qobiliyati, brauzerlarni bilish;</p> 
            <p className='table-text'><span className='table-span'> </span> ma'lumotlarni qidirish ko'nikmalari.</p> 
          </div>

        </div>
      
    </div>
  )
}

export default komp_savod
