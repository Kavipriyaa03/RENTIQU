import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mainImage from '../assets/home-4.jpg';
import check from '../assets/check.png';
import bag from '../assets/shopping-cart.png';
import dress from '../assets/bride-dress.png';
import returnimg from '../assets/return-box.png';
import bridesmaid from '../assets/bridesmaid.jpg';
import groomsmen from '../assets/groomsmen.jpg';
import exclusives from '../assets/women2.jpg';
import partner1 from '../assets/partner1.png';
import partner2 from '../assets/partner2.png';
import partner3 from '../assets/partner3.png';
import partner4 from '../assets/partner4.png';
import partner5 from '../assets/partner5.png';
import partner6 from '../assets/partner6.png';
import partner7 from '../assets/partner7.png';
import './Home.css';
import CountUp from "react-countup";
//import Navbar from './Navbar';
import Footer from './Footer';
import Review from './Review';
import offer from '../assets/offer1.mp4';

function Home() {
  
  
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className='home-page'>
        
      <div className='home-first'>
        <div className="home-row">
          <div className="home-column">
            <div className="home-left">
              <h1>RENT <br /> WEAR<br /> REPEAT</h1>
              <p>Discover the joy of dressing up for any occasion with our seamless rental
                service that make you look best.</p>
              <br />
              <br />
              <div className="stat-row">
                <div className="stat-column">
                  <span>
                    <CountUp start={200} end={500} duration={4} /> <span className='span-plus'>+</span>
                  </span><br />
                  <span className="secondaryText">Premium Products</span>
                </div>
                <div className="stat-column">
                  <span>
                    <CountUp start={7700} end={8000} duration={4} /> <span className='span-plus'>+</span>
                  </span><br />
                  <span className="secondaryText">Happy Customers</span>
                </div>
                <div className="stat-column">
                  <span>
                    <CountUp start={10} end={50} duration={4} /> <span className='span-plus'>+</span>
                  </span><br />
                  <span className="secondaryText">Partners and Suppliers</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-column">
            <div className="home-right">
              <img src={mainImage} alt="bg"></img>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='home-video'>
          <video width="1500" autoPlay loop muted>
            <source src={offer} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div> */}
      <div className='home-second'>
        <center>
          <b><para>How RENTIQUE Works</para></b>
          <div className='working'>
            <div className='working-flow'>
              <img src={bag} alt="select" />
              <h2>Select a dress</h2>
              <p>Choose a dress from the available collection.</p>
            </div>
            <div className='working-flow'>
              <img src={check} alt="buy it" />
              <h2>Book yours</h2>
              <p>Reserve the dress, provide details, and complete payment.</p>
            </div>
            <div className='working-flow'>
              <img src={dress} alt="flaunt" />
              <h2>Flaunt it</h2>
              <p>Wear and enjoy the dress for your occasion.</p>
            </div>
            <div className='working-flow'>
              <img src={returnimg} alt="return" />
              <h2>Return it</h2>
              <p>Pack the dress and ship it back by the return date.</p>
            </div>
          </div>
        </center>
      </div>
      
      <div className='home-third'>
        <center>
         <b><para1>Categories</para1></b>
          <div className='category-row'>
            <div className='category-col'>
            <Link to="/bridesmaid"><img src={bridesmaid} alt="bridesmaid category"></img></Link>
              <div className='centerd'>
              <Link to="/bridesmaid" className='cat-link'>Bridesmaid</Link>

              
              </div>
            </div>
            <div className='category-col'>
              <Link to="/groomsmen"><img src={groomsmen} alt="groomsmen category"></img></Link>
              <div className='centerd'>
                <Link to="/groomsmen" className='cat-link'>Groomsmen</Link>
              </div>
            </div>
            <div className='category-col'>

            <Link to="/exclusives"><img src={exclusives} alt="exclusive category"></img></Link>
              <div className='centerd'>
              <Link to="/exclusives" className='cat-link'>Exclusives</Link>

              
              
              </div>
            </div>
          </div>
        </center>
      </div>

      <div className="home-fourth">
        <center>
       <b> <para2>Our Partners</para2></b>
        <div className="sliders-partner">
        <Slider {...sliderSettings}>
          <div className="slide"><img src={partner1} alt="partner logo" /></div>
          <div className="slide"><img src={partner2} alt="partner logo" /></div>
          <div className="slide"><img src={partner3} alt="partner logo" /></div>
          <div className="slide"><img src={partner4} alt="partner logo" /></div>
          <div className="slide"><img src={partner5} alt="partner logo" /></div>
          <div className="slide"><img src={partner6} alt="partner logo" /></div>
          <div className="slide"><img src={partner7}alt="partner logo" /></div>
        </Slider>
        
        </div>
        </center>
      </div>

         
           
          <Review/>
        
     
      
      <Footer/>
    </div>
  );
}

export default Home;