import React from 'react';
import '../Style.css';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Services from './Services';
import Banner from './Banner';
import ContactSection from './ContactSection';
import OurTech from './OurTech';

const Home = () => {
  return (
    <>
      <Banner />
      <div className="back">
        <div className="container1"></div>
      </div>

      {/* WhatsApp Sticky Icon */}
      <a
  href="https://wa.me/917973699595"
  className="whatsapp-icon"
  target="_blank"
  rel="noopener noreferrer"
>
<img src="whats2.gif" alt="img"></img>
</a>


     
{/* //////////------Comprehensive Digital Solutions------/////////// */}

<div className="container11">

<div className="tut">

  <h1>Comprehensive Digital Solutions</h1>
  <p>The wise man therefore always holds in these matters to this principle of selection.</p>
  

</div>

<div className="com">

  <div className="ui">
  <img className='shad1' src={process.env.PUBLIC_URL+"/icon1.png"} alt='img' />
                <div className="txt-lt">
      <h2>UI/UX Design</h2>
      <p>Members, Friends Connection ( like followers ), Private Message</p>
    </div>
  </div>


  <div className="ui">
  <img className='shad2'  src={process.env.PUBLIC_URL+"/icon2.png"} alt='img' />
                <div className="txt-lt">
      <h2>Web Development</h2>
      <p>Your users can create groups to let other users to join and talk</p>
    </div>
  </div>





{/* ////// */}


  <div className="ui">
  <img className='shad3'  src={process.env.PUBLIC_URL+"/icon3.png"} alt='img' />
                <div className="txt-lt">
      <h2>Mobile Apps Development</h2>
      <p>Forum is ready by BBPress. Your users can make topics and talk.</p>
    </div>
  </div>


  <div className="ui">
  <img className='shad1' src={process.env.PUBLIC_URL+"/icon4.png"} alt='img' />
                <div className="txt-lt">
      <h2>Game Development</h2>
      <p>You can create Members, Groups It's by drag & drop live builder.</p>
    </div>
  </div>



{/* ////// */}


<div className="ui">
  <img className='shad2' src={process.env.PUBLIC_URL+"/icon5.png"} alt='img' />
                <div className="txt-lt">
      <h2>Digital Marketing</h2>
      <p>Members, Groups list can be modified by drag & drop live builder.</p>
    </div>
  </div>


  <div className="ui">
  <img className='shad3' src={process.env.PUBLIC_URL+"/icon6.png"} alt='img' />
                <div className="txt-lt">
      <h2>AR/VR Development</h2>
      <p>8 different scroll effects are ready. You can always change by your tastes.</p>
    </div>
  </div>





{/* //// */}
    </div>

  </div>



{/* //////////-----End-Comprehensive Digital Solutions------/////////// */}




      <OurTech />
      <Services />
      <div className="test2">
        <div className="container ">
          <div className="tut tut2">
            <h1>Why customers love working with us</h1>
            <p>The wise man therefore always holds in these matters to this principle of selection.</p>
          </div>
          <div className="herosection">
            <Testimonials />
          </div>
        </div>
      </div>
      <ContactSection />
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;
