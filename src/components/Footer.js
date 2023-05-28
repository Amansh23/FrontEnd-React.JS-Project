import React from 'react'
import FacebookCircleFillIcon from 'remixicon-react/FacebookCircleFillIcon'
import InstagramFillIcon from 'remixicon-react/InstagramFillIcon'
import LinkedinBoxFillIcon from 'remixicon-react/LinkedinBoxFillIcon'
import WhatsappFillIcon from 'remixicon-react/WhatsappFillIcon'
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon'
const Footer = () => {
  return (
    <div className='footer'>
            <div className="hirebox">
                <div className="hireboxpart1">
                    <h1>Have Any Project In Mind</h1>
                    <div className="hireboxpart1line"></div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptas?
                    </p>
                </div>
                <div className="hireboxpart2">
                    <div className="hirebtn">
                        <h3>HIRE ME</h3>
                    </div>
                </div>
            </div>
            <div className="footerbox">
                <h2>Desig<span>ner .</span></h2>
                <span className='iconspan'>
                    <FacebookCircleFillIcon></FacebookCircleFillIcon>
                    <InstagramFillIcon></InstagramFillIcon>
                    <LinkedinBoxFillIcon></LinkedinBoxFillIcon>
                    <WhatsappFillIcon></WhatsappFillIcon>
                    <TwitterFillIcon></TwitterFillIcon>
                </span>
                <h3>amansharma1503@gmail.com</h3>
            </div>

    </div>
  )
}

export default Footer