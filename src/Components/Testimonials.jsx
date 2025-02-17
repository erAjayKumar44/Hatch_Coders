import React   from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';




import '../Style.css';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
    slidesPerView={3}
    spaceBetween={30}
    freeMode={true}
    loop={true}
    autoplay={{ delay: 1000 }}
    pagination={{
        clickable: true,
    }}
    navigation={true}
    modules={[FreeMode, Pagination, Navigation]}
    className="mySwiper1"
>
        <SwiperSlide className='sld'>
          <div className="hero-im tst-im">

           <img src={process.env.PUBLIC_URL+"tst.png"} alt='img'/>
          </div>
          <div className="txt-hr tst">
          
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been text. Lorem Ipsum is simply dummy.  text. Lorem Ipsum is simply dummy.</p>
              <div className="social tst-d">
               
               
               <div>
                <h3 style={{color:'#424242'}}>Shown Marsh</h3>
                </div>
               <div style={{display:'flex', gap:'4px'}}>
                <img src={process.env.PUBLIC_URL+"star1.png"} alt='img'/>
                <img src={process.env.PUBLIC_URL+"star1.png"} alt='img'/>
                <img src={process.env.PUBLIC_URL+"star1.png"} alt='img'/>
                <img src={process.env.PUBLIC_URL+"star1.png"} alt='img'/>
                <img src={process.env.PUBLIC_URL+"star1.png"} alt='img'/>
                </div>
              </div>
           </div>

        </SwiperSlide>
        


{/* /////////// */}

<SwiperSlide className='sld'>
          <div className="hero-im tst-im">

           <img src={process.env.PUBLIC_URL+"Avatar1.png"} alt='img'/>
          </div>
           <div className="txt-hr tst">
          
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been text. Lorem Ipsum is simply dummy.  text. Lorem Ipsum is simply dummy.</p>
              <div className="social tst-d">
               
               
               <div>
                <h3 style={{color:'#424242'}}>Andrian</h3>
                </div>
               <div style={{display:'flex', gap:'4px'}}>
                <img src={process.env.PUBLIC_URL+"star1.png"} alt='img'/>
                <img src={process.env.PUBLIC_URL+"star1.png"} alt='img'/>
                <img src={process.env.PUBLIC_URL+"star1.png"} alt='img'/>
                <img src={process.env.PUBLIC_URL+"star1.png"} alt='img'/>
                <img src={process.env.PUBLIC_URL+"star1.png"} alt='img'/>
                </div>
              </div>
           </div>

        </SwiperSlide>


{/* //////////////// */}

<SwiperSlide className='sld'>
          <div className="hero-im tst-im">

           <img src={process.env.PUBLIC_URL+"Avatar 2.png"} alt='img'/>
          </div>
          <div className="txt-hr tst">
          
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been text. Lorem Ipsum is simply dummy.  text. Lorem Ipsum is simply dummy.</p>
          <div className="social tst-d">
           
           
           <div>
            <h3 style={{color:'#424242'}}>David Miller</h3>
            </div>
           <div style={{display:'flex', gap:'4px'}}>
            <img src={process.env.PUBLIC_URL+"star1.png"} alt='img'/>
            <img src={process.env.PUBLIC_URL+"star1.png"} alt='img'/>
            <img src={process.env.PUBLIC_URL+"star1.png"} alt='img'/>
            <img src={process.env.PUBLIC_URL+"star1.png"} alt='img'/>
            <img src={process.env.PUBLIC_URL+"star1.png"} alt='img'/>
            </div>
          </div>
       </div>

        </SwiperSlide>


{/* ///////////// */}
        
<SwiperSlide className='sld'>
          <div className="hero-im tst-im">

           <img src={process.env.PUBLIC_URL+"Avatar3.png"} alt='img'/>
          </div>
          <div className="txt-hr tst">
          
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been text. Lorem Ipsum is simply dummy.  text. Lorem Ipsum is simply dummy.</p>
          <div className="social tst-d">
           
           
           <div>
            <h3 style={{color:'#424242'}}>Thomas rob</h3>
            </div>
           <div style={{display:'flex', gap:'4px'}}>
            <img src={process.env.PUBLIC_URL+"star1.png"} alt='img'/>
            <img src={process.env.PUBLIC_URL+"star1.png"} alt='img'/>
            <img src={process.env.PUBLIC_URL+"star1.png"} alt='img'/>
            <img src={process.env.PUBLIC_URL+"star1.png"} alt='img'/>
            <img src={process.env.PUBLIC_URL+"star1.png"} alt='img'/>
            </div>
          </div>
       </div>




        </SwiperSlide>


{/* //////////// */}

<SwiperSlide className='sld'>
          <div className="hero-im tst-im">

           <img src={process.env.PUBLIC_URL+"Avatar1.png"} alt='img'/>
          </div>
          <div className="txt-hr tst">
          
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been text. Lorem Ipsum is simply dummy.  text. Lorem Ipsum is simply dummy.</p>
              <div className="social tst-d">
               
               
               <div>
                <h3 style={{color:'#424242'}}>Micheal star1k</h3>
                </div>
               <div style={{display:'flex', gap:'4px'}}>
                <img src={process.env.PUBLIC_URL+"star1.png"} alt='img'/>
                <img src={process.env.PUBLIC_URL+"star1.png"} alt='img'/>
                <img src={process.env.PUBLIC_URL+"star1.png"} alt='img'/>
                <img src={process.env.PUBLIC_URL+"star1.png"} alt='img'/>
                <img src={process.env.PUBLIC_URL+"star1.png"} alt='img'/>
                </div>
              </div>
           </div>
        </SwiperSlide>


      </Swiper>
    </>
  );
}
