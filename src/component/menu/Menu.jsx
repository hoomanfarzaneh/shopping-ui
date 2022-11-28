import './menu.css';
import HomeIcon from '@mui/icons-material/Home';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import GoogleIcon from '@mui/icons-material/Google';

export default function Menu({ menuOpen, setMenuOpen }) {
  return <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
          <li className='subMenu' onClick={()=> setMenuOpen(false)}> 
            <HomeIcon />
            <a href='#main'>صفحه اصلی</a>
          </li>
          <li onClick={()=> setMenuOpen(false)}>
            <FiberNewIcon />
             <a href='#about'>جدیدترین ها    </a>
          </li>
          <li onClick={()=> setMenuOpen(false)}>
            <ShoppingCartOutlinedIcon />
            <a href='#service'>سفارشات</a>
          </li>
          <li onClick={()=> setMenuOpen(false)}>
             <CelebrationOutlinedIcon />
            <a href='#project'> جشنواره</a>
          </li>
          <li onClick={()=> setMenuOpen(false)}>
             <StorefrontOutlinedIcon />
            <a href='#gallery'> درباره ما </a>
          </li>
          <li onClick={()=> setMenuOpen(false)}> 
            <PermPhoneMsgIcon />
            <a href='#contact'>ارتباط با ما</a>
          </li>
            <hr />
          <li className='socialIcon' onClick={()=> setMenuOpen(false)}> 
            <span><TelegramIcon /></span>
            <span><InstagramIcon /></span>
            <span><WhatsappIcon /></span>
            <span><GoogleIcon /></span>
          </li>
      </ul>
  </div>;
}