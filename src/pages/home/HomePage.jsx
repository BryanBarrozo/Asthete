

import Header from '../../components/Header/Header'
import Hero from './componentsHome/Hero/Hero'
import NewArrivals from './componentsHome/NewArrivals/NewArrivals'
import About from './componentsHome/About/About'
import Footer from '../../components/Footer/Footer'

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