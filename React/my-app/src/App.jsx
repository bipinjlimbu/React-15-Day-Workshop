import Footer from "./section/Footer"
import Header from "./section/Header"
import Hero from "./section/Hero"
import './global.css'

export const App=()=>{

  return (
     <div className="app">
      <Header/>
      <Hero/>
      <Footer/>
    </div>
)
}