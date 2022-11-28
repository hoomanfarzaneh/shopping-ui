import React, { useEffect, useState } from 'react'
import './products.css';
import { productItems } from '../../data';
import { Product } from '../product/Product';
import { Pagination } from '@mui/material';
const Products = () => {
  const [filter, setFilter] = useState("");
  const [list, setList]= useState([]);
  const[value, setValue]= useState("")
   
  useEffect(() => {
    applyFilter();
  }, []);

  const applyFilter= (value)=>{
    setValue(value);
    let updatedList = productItems;
    updatedList = updatedList.filter(
      (item) => (item.cat === value)
    )
    if (value ==="همه")
    updatedList = productItems;
    setList(updatedList);
  }
 
  return (
    <div className='products'>
        <h1>ویترین فروشگاه</h1>
        <hr />
        <div className="productCat">
          <div className="titleCat">
            <button  onClick={()=>applyFilter("همه")}>همه</button>
            <button  onClick={()=>applyFilter("بانوان")}>بانوان</button>
            <button  onClick={()=>applyFilter("آقایان")}>آقایان</button>
            <button  onClick={()=>applyFilter("کفش")}>کفش</button>
            <button  onClick={()=>applyFilter("ساعت")}>ساعت</button>
            <button  onClick={()=>applyFilter("کمربند")}>کمربند</button>
            <button  onClick={()=>applyFilter("کیف")}>کیف</button>
          </div>
          <div className="iconCat">
            <input className='searchInput' 
              type="text" 
              placeholder='جستجو...' 
              onChange={(e)=>setFilter(e.target.value)}/>
          </div>
        </div>
        <div className="productsContainer">
          {(value) ? (list.filter((item)=>
            item.title.toLowerCase().includes(filter))
            .map((item) =>(
            <Product item={item} key={item.id} />
          ))) 
          : (productItems.filter((item)=>
          item.title.toLowerCase().includes(filter))
          .map((item) =>(
          <Product item={item} key={item.id} />
          )))
          }
        </div>
        <Pagination className='pagination' count={5} variant="outlined" color="primary" />
    </div>
  )
}

export default Products