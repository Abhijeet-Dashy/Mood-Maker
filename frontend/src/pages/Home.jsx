import React from 'react'
import Header from '../components/Header'
import AllMoods from '../components/AllMoods'
import Greet from '../components/Greet'

const Home = () => {
  return (
    <div className=''>
      <Header/>
      <Greet/>
      <AllMoods/>
    </div>
  )
}

export default Home
