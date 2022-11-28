import React from 'react'
import './footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import GoogleIcon from '@mui/icons-material/Google';
const Footer = () => {
  return (
      <div className="footer">
        <div className="footerContainer">
          <div className="footerTxt">
            <div className="title">
              <i class="bi bi-geo-alt"></i>
              <h4>آدرس</h4>
            </div>
            <div className="footBody">
              <p>  تهران - خیابان سهروردی شمالی - </p>
              <p>خیابان شهید قندی - کوچه سوم - واحد 11 - </p>
            </div>
          </div>
          <div className="footerTxt">
            <div className="title">
              <i class="bi bi-geo-alt"></i>
              <h4>راه های ارتباطی</h4>
            </div>
            <div className="footBody">
              <p>تلفن: 0987654321</p>
              <p>ایمیل:test@gmail.com</p>
            </div>
          </div>
          <div className="footerTxt">
            <div className="title">
              <i class="bi bi-geo-alt"></i>
              <h4>ساعات کار</h4>
            </div>
            <div className="footBody">
              <p>شنبه تا 5 شنبه : 9صبح تا 6 عصر</p>
              <p>جمعه : تعطیل</p>
            </div>
          </div>
          <div className="footerTxt">
            <div className="titleIcon">
              <h6> ما را در شبکه های اجتمایی دنبال کنید</h6>
            </div>
            <div className="icon">
            <i><InstagramIcon /></i>
            <i><WhatsAppIcon /></i>
            <i><TelegramIcon /></i>
            <i><GoogleIcon /></i>
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <h6>© Copyright Hoom. All Rights Reserved</h6>
          <p> Designed by Ho0m</p>
        </div>
      </div>
  )
}

export default Footer