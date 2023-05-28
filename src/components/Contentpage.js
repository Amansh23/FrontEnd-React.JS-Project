import React from 'react'
import img1 from '../assets/img1.png'
const Contentpage = () => {
  return (
    <div className='contentpage'>
        <div className='meetbox'>
            <div className="meetboxcontent">
                <h2>MEET OUR COMPANY</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, labore sint nulla consequuntur quos deserunt ea a nisi voluptatibus. Cupiditate quam aut laboriosam quas mollitia nisi placeat pariatur obcaecati dicta!
                </p>
                <div className='learnmorebtn'>
                    <h3>Learn more</h3>
                </div>
            </div>
            <div className="meetboximg">
                <img src={img1} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Contentpage