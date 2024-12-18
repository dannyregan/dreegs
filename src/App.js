// import React from "react";
// import { BrowserRouter as Router } from 'react-router-dom';
// import Nav from "./Components/Nav";
// import AboutMe from "./Components/AboutMe";
// // import MenuBar from "./Components/Menu";
// import Portfolio from "./Components/Portfolio";
// import Footer from './Components/Footer';
// import Scrollbar from "./Components/Scrollbar";
// import Contact from "./Components/Contact";
// import Home from "./Components/Home";
// import Resume from "./Components/Resume";

// function App() {
//   let NavSelection;
//   switch (window.location.pathname) {
//     case '/home':
//       NavSelection = Home
//       break
//     case '/Home':
//       NavSelection = Home
//       break
//     case '/':
//         NavSelection = Home
//         break
//     case '/Portfolio':
//       NavSelection = Portfolio
//       break
//     case '/AboutMe':
//       NavSelection = AboutMe
//       break
//     case '/Resume':
//       NavSelection = Resume
//       break
//   }

//   return (
//     <>
      
//       <Nav />
//       <NavSelection />
//       {/* <Portfolio id='Portfolio'/> */}
//       {/* <AboutMe id='About Me'/> */}
//       <Contact />
//       <Footer />
//       {/* <MenuBar /> */}
//       <Scrollbar />
//     </>

//   )
// }
// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from "./Components/Nav";
import AboutMe from "./Components/AboutMe";
import Portfolio from "./Components/Portfolio";
import Footer from './Components/Footer';
import Scrollbar from "./Components/Scrollbar";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Resume from "./Components/Resume";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
        {/* <Contact /> */}
        <Footer />
        <Scrollbar />
      </div>
    </Router>
  );
}

export default App;
