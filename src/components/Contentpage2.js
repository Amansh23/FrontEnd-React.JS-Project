import React from 'react'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.jpg'
const Contentpage2 = () => {
  return (
    <div className='contentpage2'>
        <div className="contentpage2upper">
              <div className="contentviewleft">
                  <h1>Designed for startups and brands.</h1>
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque harum autem earum optio quidem fugiat, voluptatibus adipisci a nam, obcaecati aliquam ratione quibusdam nulla fugit? 
                  </p>
                  <h3>Write some features here</h3>
                  <span>Response the sum with another one</span>
              </div>
              <div className="contentviewright">
                      <img src={img2} alt="" />
              </div>
        </div>
        <div className="contentpage2lower">
              <div className="contentviewlowerleft">
                    <img src={img3} alt="" />
              </div>
              <div className="contentviewlowerright">
                  <h1>Desitiny isn't AI, it's the result of human intelligence.</h1>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur odit iste, sunt ipsa fugiat voluptatem architecto. Iusto pariatur deserunt expedita enim, obcaecati nesciunt ea ratione.
                  </p>
                  <h3>Write some features here</h3>
                  <span>Response the sum with another one</span>
              </div>
        </div>
    </div>
  )
}

export default Contentpage2