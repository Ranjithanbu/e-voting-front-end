import React from 'react';
import './home.css'
const Home = () => {
    return (
        <div className='container'>

<div className='d-md-flex f-container'>
    <div className='col-12 col-md-5 m-content'>
        <h1>Let us <span>together</span> build the <span>world's</span> strongest <span>decmocarcy</span> </h1>
    </div>
    <div className='img-container col-12 col-md-7'>
        <img src="f7e90adb4024280973203534beca25f7.jpg" width='500px' height='500px' alt="" />
    </div>
</div>

<div className='home-content'>
    <div className='d-md-flex'>
        <div className='col-12 col-md-7 '>
            <img className='text-center' src="https://seeklogo.com/images/E/election-commission-of-india-logo-324FF87C0E-seeklogo.com.png" width='400px' height='400px' alt="" />
        </div>
        <div className='col-12 col-md-5 second-content'>
            <h1><span>Welcome</span> to our <span>e-voting platform</span>, where your <span>voice counts!</span> We're thrilled to have you here, <span>empowering</span> you to participate in <span>shaping</span> the future with <span>just a few clicks.</span></h1>
        </div>
        
    </div>
    
</div>
<div className=' d-md-flex mt-4'>
    <div className='col-12 col-md-5 m-content'>
    <h1 className=''> Let your opinions be heard, your choices counted, and your democracy strengthened. Together, let's make a difference, one vote at a time!</h1>
    </div>
    <div className='img-container text-center col-12 col-md-7'>
        <img className='' src="—Pngtree—online vote illustration with transparent_7511225.png" width='500px' height='500px' alt="" />
    </div>
</div>
</div>
    );
};

export default Home;
