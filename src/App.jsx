import Expertise from './components/expertise/Expertise';
import Header from './components/header/header';
import Hero from './components/hero/Hero';
import css from './styles/App.module.scss'

function App() {
  
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
    <Expertise/>
  </div>
}

export default App
