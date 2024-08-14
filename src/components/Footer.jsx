import React from 'react';
import './Footer.css';
//import insta from '../assets/insta.png';
import twitter1 from '../assets/twitter1.png';
//import pinterest from '../assets/pinterest.png';
import insta1 from '../assets/insta1.png';
import facebook from '../assets/facebook.png';
//import youtube from '../assets/youtube.png';



const Footer=()=>{
    return(
        <div className="footer">
<div className="sb_footer section_padding">
    <div className="sb__footer-links">
        <div className="sb__footer-links_div">
            <h4>OUR COMPANY</h4>
            <a href="/aboutus">
                <p>ABOUT US</p>
            </a>
            <a href="/terms">
                <p>TERMS & CONDITIONS</p>
            </a>
            <a href="/contact">
                <p>CONTACT US</p>
            </a>
        </div>
        <div className="sb__footer-links_div">
            <h4>CUSTOMER CARE</h4>
            <a href="/faq">
                <p>FAQ</p>
            </a>
            <a href="/privacy">
                <p>PRIVACY POLICY</p>
            </a>
            <a href="/return">
                <p>RETURN & REFUND</p>
                </a>
    </div><div className="sb__footer-links_div">
            <h4>CONTACT US</h4>
            <a href="/contact">
                <p>rentique@gmail.com</p>
                
            </a>
            <a href="/number">
            <p>+91-6789-868-900</p></a>
            </div>
            {/*<div className="sb__footer-links_div">
            <h4>Company</h4>
            <a href="/about">
                <p>About Us</p>
            </a>
            <a href="/press">
                <p>Contact Us</p>
            </a>
            <a href="/career">
                <p>Blog</p>
                </a>
            
            </div>*/}
           <div className="sb__footer-links_div">
            <h4>FOLLOW US ON</h4>
            <div className="socialmedia">
                
                <p><img src={twitter1} alt=""/></p>
                
                <p><img src={insta1} alt=""/></p>
                {/*<p><img src={pinterest} alt=""/></p>*/}
                <p><img src={facebook} alt=""/></p>
                {/*<p><img src={youtube} alt=""/></p>*/}
                
            </div>
          </div>
</div>


<div className="sb__footer-below">
    <div className="sb__footer-copyright">
        <p>@{new Date().getFullYear()} Rentique Clothing.All right reserved.</p>
    </div>
    
</div>
        </div>
        </div>
        
    )
}
export default Footer;