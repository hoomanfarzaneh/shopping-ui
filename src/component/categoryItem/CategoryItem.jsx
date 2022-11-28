import React from 'react'
import './categoryItem.css'
const CategoryItem = ({item}) => {
  return (
    <div className='categoryItem'>
      <div className="container">
        <img src={item.img} alt='' />
        </div>
        <div className="categoryInfo">
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
        </div>
        <div className="categoryCover">
          <h3> خرید کنید</h3>
        </div>
    </div>
  )
}

export default CategoryItem