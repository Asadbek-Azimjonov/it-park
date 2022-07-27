import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards' id='cards'>
      <h1>Bizning kurslar!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items card_wrap'>
            <CardItem
            
              src='images/kompsavod1.jpg'
              text='Kompyuter bilimlarini no`ldan ishonchli foydalanuvchi darajasigacha oshirish!'
              label='Kompyuter Savodxonligi'
              path='/komp_savod'
            />
            <CardItem
              src='images/front.jpg'
              text='Website yaratib do`stlaringizni lol qoldiring va yuqori talabga ega kasbni egallang !'
              label='Fron-End'
              path='/frontend'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/graphic.jpg'
              text='Adobe Photoshop, Illustrator va boshqa grafik dasturlarini o`qitish!'
              label='Grafic Design'
              path='/design'
            />
            <CardItem
              src='images/Backend.jpg'
              text='Backend-dasturchi veb-ilovalarning dasturiy-ma`muriy qismi, tizimning ichki tarkibi, server texnologiyalari, ma`lumotlar bazasi, arxitekturasi va dasturlarning logikasi bilan shug`ullanadigan mutaxassisdir.'
              label='Back-End'
              path='/backend'
            />
            <CardItem
              src='images/IT-english.jpg'
              text='IT jarayonlarini tushunish uchun ixtisoslashtirilgan maxsus ingliz tili!'
              label='IT Enlish'
              path='/itenglish'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
