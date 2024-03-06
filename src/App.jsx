import React from 'react'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subTitle ='Our PROGRAM' title='What We Offer'/>
      <Programs/>
      <About/>
      <Title subTitle ='Gallery' title='Campus Photos'/>
      <Campus/>

      </div>
    </div>
  )
}

export default App