import React from 'react'
import FormNameUser from '../components/Home/FormNameUser';
import FormPoke from '../components/Pokedex/FormPoke';
import HeaderPoke from '../components/Header/HeaderPoke';
import '../components/Pokedex/styles/Home.css'
const Home = () => {
  return (
    <div className="home__container">
    <article className='home'>
      <div className='home__items'>
        <div className='home__title'></div>
        <h2 className='home__hi'>Hi Trainer!</h2>
        <p className='home__please'>Please give us your name to start</p>
        <FormNameUser />
      </div>
      <div className="home_footer"></div>
    </article>
    </div>
  )
}

export default Home
