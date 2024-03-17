import React from "react";
import Nav from "./Components/Nav";
import AboutMe from "./Components/AboutMe";
import MenuBar from "./Components/Menu";
import Portfolio from "./Components/Portfolio";
import Footer from './Components/Footer';
import Scrollbar from "./Components/Scrollbar";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Resume from "./Components/Resume";

function App() {
  let NavSelection;
  switch (window.location.pathname) {
    case '/Home':
      NavSelection = Home
      break
    case '/Portfolio':
      NavSelection = Portfolio
      break
    case '/AboutMe':
      NavSelection = AboutMe
      break
    case '/Resume':
      NavSelection = Resume
      break
  }

  return (
    <>
      
      <Nav />
      <NavSelection />
      {/* <Portfolio id='Portfolio'/> */}
      {/* <AboutMe id='About Me'/> */}
      <Contact />
      <Footer />
      {/* <MenuBar /> */}
      <Scrollbar />
    </>

  )
}
export default App;