import React from 'react'
import './swiper.css'
const Swiper = () => {
  return (
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <img class="swiper-slide gallery-slide" src='./img/slide-01.jpg' alt=''/>
        <img class="swiper-slide gallery-slide" src='./img/slide-02.jpg' alt=''/>
        <img class="swiper-slide gallery-slide" src='./img/slide-03.jpg' alt=''/>
        <img class="swiper-slide gallery-slide" src='./img/slide-04.jpg' alt=''/>
        <img class="swiper-slide gallery-slide" src='./img/slide-05.jpg' alt=''/>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>
  )
}

export default Swiper