import './home.css'
import Navbar from '../../component/navbar/Navbar'
import Menu from '../../component/menu/Menu'
// import Slider from '../../component/slider/Slider'
import Categories from '../../component/categories/Categories'
import Products from '../../component/products/Products'
import Footer from '../../component/footer/Footer'
import Swiper from '../../component/swiper/Swiper'
import { useState } from 'react'
const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="home">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        {/* <Slider /> */}
        <Swiper />
        <Categories />
        <Products />
        <Footer />
    </div>
  )
}

export default Home