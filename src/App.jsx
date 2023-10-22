import Expertise from './components/expertise/Expertise';
import Header from './components/header/header';
import Hero from './components/hero/Hero';
import Work from './components/works/Work';
import css from './styles/App.module.scss'

function App() {
  
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
    <Expertise/>
    <Work/>
  </div>
}

export default App
