import React from 'react'
import ArrowIcon from 'remixicon-react/ArrowRightLineIcon';
import facebookimg from '../assets/facebook.png'
import instaimg from '../assets/insta.png'
import whatsappimg from '../assets/whatsapp.png'
import linkimg from '../assets/link.png'
import behanceimg from '../assets/behance.png'
const headingpage = () => {
  return (
    <div className='headingpage'>
        <h1>Meet Destiny </h1>
        <h1>The Visionary Landing Page</h1>
        <div className='explorebtn'>
            <h3>Let's Explore </h3>
             <span className='span'><ArrowIcon/></span> 
        </div>
        <div className='hoverbox'>
            <div className='hoverelem1'>
                <div className="hoverelem1pic">
                    <img src={instaimg} alt="" />
                </div>
                <div className="hoverelem1content">
                    <h3>Instagram</h3>
                </div>
            </div>
            <div className='hoverelem1'>
                <div className="hoverelem1pic">
                    <img src={facebookimg} alt="" />
                </div>
                <div className="hoverelem1content">
                    <h3>Facebook</h3>
                </div>
            </div>
            <div className='hoverelem1'>
                <div className="hoverelem1pic">
                    <img src={whatsappimg} alt="" />
                </div>
                <div className="hoverelem1content">
                    <h3>Whatsapp</h3>
                </div>
            </div>
            <div className='hoverelem1'>
                <div className="hoverelem1pic">
                    <img src={linkimg} alt="" />
                </div>
                <div className="hoverelem1content">
                    <h3>Linkedin</h3>
                </div>
            </div>
            <div className='hoverelem1'>
                <div className="hoverelem1pic">
                    <img src={behanceimg} alt="" />
                </div>
                <div className="hoverelem1content">
                    <h3>Behance</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default headingpage