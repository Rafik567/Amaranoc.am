import { useState } from 'react'
import './App.css'
import TopHeader from './Components/Header/TopHeader'
import BestOffers from './Components/Body/BestOffers'
import RegularOffers from './Components/Body/RegularOffers'
import Post from './Components/Body/Post'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
  <TopHeader/>
  <BestOffers/>
  <RegularOffers/>
  <Post/>
  <Footer/>
    </>
  )
}

export default App
