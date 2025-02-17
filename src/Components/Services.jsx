import React from 'react';
import '../Style.css';

const Services = () => {
  return (

    <>
    
    <div className="tut">
    {/* <img style={{textAlign:'left'}} className='line' src={process.env.PUBLIC_URL+"/line.png"} alt="line-img" /> */}

      <h1>Here are few our recent works</h1>
      <p>The wise man therefore always holds in these matters to this principle of selection.</p>
      

    </div>

<div className="container">

<div className="btn1">
<button>View All <img src='arrow1.png'></img></button>
</div>
    



 <div className="service">

<div className="ser">

    <img src='app1.png' alt='img'></img>
    <h2>Food Delivery App</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>

</div>

<div className="ser">

    <img src='app2.png' alt='img'></img>
    <h2>E-Pay App</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>

</div>



 </div>



 <div className="service serv1">

<div className="ser">

    <img src='app3.png' alt='img'></img>
    <h2>Podcast App</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>

</div>

<div className="ser ser2">

    <img src='app4.png' alt='app-image'></img>
    <h2>Service Provider App</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>

</div>



 </div>




 </div>

    </>
  );
};

export default Services;

