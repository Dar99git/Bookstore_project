
import React from "react"
import ReactDOM from "react-dom/client"
//import App from "./App"
import Navbar from "./Navbar"
import Home from "./Pages/Home" 
import About from "./Pages/About"
import Books from "./Pages/Books" 
import NewRelease from "./Pages/NewRelease" 
import Contact from "./Pages/Contact" 
import LogIn from "./Pages/LogIn"
import Education from "./Pages/Education"
import "./styles.css"
import "./Components/Home.css"
import "./Components/About.css"
import "./Components/Books.css"
import "./Components/NewRelease.css"
import "./Components/Contact.css"
import "./Components/LogIn.css"
import "./Components/Education.css"



function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home/>
      break 
    case "/about":
     component = <About/>
    break
    case "/books":
      component = <Books/>
    break 
    case "/newrelease":
      component = <NewRelease/>
    break 
    case "/contact":
      component = <Contact/>
    break   
    case "/login":
      component = <LogIn/>
    break 
  }
  return(
   <> 
    <Navbar />
    <div className="container">{component}</div>
    
   </>
  )
}

export default App;
