import './app.scss'
import Navbar from './Components/Navbar/Navbar'
import Test from './Test'
import RainbowHome from './Components/RainbowHome/RainbowHome'
import AboutPage from './Components/AboutPage/AboutPage'
import Works from './Components/Works/Works'
import { Parallax } from 'react-parallax';
import Contact from './Components/Contacts/Contact'
import Products from './Components/Producs/Products'
import Secondnavbar from './Components/SecondNavbar/Secondnavbar'



function App() {
  return (
    <>
      <div>
        <div>
          <Secondnavbar />
        </div>
        <section id='Home'>
          <RainbowHome />
        </section>
        <section id='aboutpage'><AboutPage /></section>
        {/* <Works /> */}
        <section id='products' ><Products /></section>
        <section id='contact'><Contact /></section>
      </div>
    </>
  )
}

export default App
