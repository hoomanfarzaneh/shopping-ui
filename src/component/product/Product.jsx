import React from 'react'
import './product.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export const Product = ({item}) => {
  return (
    <div className='product'>
      <a href={item.img} class="glightbox">
       <img src={item.img} alt='' />
      </a>
        <div className="productTitle">
        <h3>{item.title}</h3>
        <FavoriteBorderIcon />
        </div>
        <p>{item.price}</p>
    </div>
  )
}
