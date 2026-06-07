
/*
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

import NewArrivals from './components/NewArrivals/NewArrivals'

import About from './components/About/About'
import Footer from './components/Footer/Footer'
*/

import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import NewArrivals from '../components/NewArrivals/NewArrivals'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'

function HomePage(){
    return (
    <>
    <Header/>
    <main>
      <Hero/>
      <NewArrivals/>
      <About/>
    </main>
    <Footer/>
    </>
  )
}

export default HomePage