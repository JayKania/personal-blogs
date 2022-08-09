import React from 'react'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Subscribe from './components/Subscribe'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Categories />
      <Subscribe />
      <Footer />
    </>
  )
}

export default App