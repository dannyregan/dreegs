import React from "react";
import Nav from "./Components/Nav";
import AboutMe from "./Components/AboutMe";
import MenuBar from "./Components/Menu";
import Portfolio from "./Components/Portfolio";
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Nav />
      <Portfolio id='Portfolio'/>
      <AboutMe id='About Me'/>
      <Footer />
      <MenuBar />
    </>

  )
}
export default App;