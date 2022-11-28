import React, { useState } from 'react'
import {sliderItems} from '../../data'
import './slider.css'
import ArrowLeftOutlined from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlined from '@mui/icons-material/ArrowRightOutlined';
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
          }
    };
  return (
    <div className='slider'>
        <div className="arrowSlider arrowLeft" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined />
        </div>
        <div className="wrapper" style={{transform: `translateX(-${slideIndex * 100}vw)`}}>
            {sliderItems.map((item) => (
            <div className='slide' bg={item.bg} key={item.id}>
                <div className='imgContainer'>
                    <img src={item.img} alt=""/>
                </div>
                <div className='infoContainer'>
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                    <button>خرید کنید</button>
                </div>
            </div>
            ))}
        </div>
        <div className="arrowSlider arrowRight" onClick={()=> handleClick("right")}>
            <ArrowRightOutlined />
        </div>
    </div>
  )
}

export default Slider