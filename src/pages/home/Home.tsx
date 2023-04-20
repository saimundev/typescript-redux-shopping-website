import React from 'react'
import Header from '../../components/Header'
import Banner from './Banner'
import Category from './Category'
import Prodect from './Prodect'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Category/>
        <Prodect/>
    </div>
  )
}

export default Home