import './navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Badge } from '@mui/material';
import { useState } from 'react';
const Navbar = ({menuOpen, setMenuOpen}) => {
  const [isScrolled, setIsScrolled]= useState(false);
  const[inputSearch, setInputSearch]= useState(false);
  window.onscroll = ()=>{
    setIsScrolled(window.pageYOffset < 1 ? false : true);
    return () => (window.onscroll = null);
  };
  
  return (
    <div className={isScrolled ? 'navbar scrolled ' + (menuOpen && 'active') : 'navbar ' + (menuOpen && 'active')}>
      <div className="rSide">
        <div className='hamburger' onClick={()=> setMenuOpen(!menuOpen)}>
          <span className='line1'></span>
          <span className='line1'></span>
          <span className='line1'></span>
        </div>
        <h1>Ho0m</h1>
        <div className="navMenu">
          <ul>
            <li>صفحه اصلی</li>
            <li>جدیدترین ها</li>
            <li>سفارشات</li>
            <li>درباره ما</li>
            <li>ارتباط با ما</li>
          </ul>
        </div>
      </div>
      <div className="lSide">
        <div className={'search ' + (inputSearch && 'active')} >
          {/* <Search />
          <input placeholder='جستجو'></input> */}
          <div className="icon" onClick={()=>setInputSearch(!inputSearch)}>
          </div>
          <div className="input">
            <input type="text" placeholder='search' id='mysearch'/>
          </div>
        </div>
        <Badge badgeContent={2} color='primary'>
         <FavoriteBorderIcon />
        </Badge>
        <Badge badgeContent={4} color='primary'>
          <ShoppingCartIcon />
        </Badge>
      </div>
    </div>
  )
}

export default Navbar