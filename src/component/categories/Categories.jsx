import React from 'react'
import './categories.css'
import CategoryItem from '../categoryItem/CategoryItem'
import {categoryItems} from '../../data'
const Categories = () => {
  return (
    <div className='categories'>
      {categoryItems.map((item)=>(
       <CategoryItem item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Categories