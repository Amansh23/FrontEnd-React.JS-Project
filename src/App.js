import React from 'react'
import Navigation from './components/Navigation'
import Headingpage from './components/Headingpage'
import Contentpage from './components/Contentpage'
import Contentpage2 from './components/Contentpage2'
import Designingpage from './components/Designingpage'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navigation/>
      <Headingpage/>
      <Contentpage/>
      <Contentpage2/>
      <Designingpage/>
      <Footer/>
    </div>
  )
}

export default App