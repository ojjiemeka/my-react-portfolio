import Expertise from './components/expertise/Expertise';
import Footer from './components/footer/Footer';
import Header from './components/header/header';
import Hero from './components/hero/Hero';
import People from './components/people/People';
import Portfolio from './components/portfolio/Portfolio';
import Work from './components/works/Work';
import css from './styles/App.module.scss'

function App() {
  
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
    <Expertise/>
    {/* <Work/> */}
    <Portfolio/>
    <People/>
    <Footer/>
  </div>
}

export default App
