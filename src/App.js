import React from "react";
import {
 
  Routes,
  Route,

} from "react-router-dom";

import About from "./components/About/About";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import Contact from "./components/Contact/Contact";

function App() {
  return (
<>
    <Header/>
    <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/About" exact element={<About/>} />
            <Route path="/Service" exact element={<Service/>} />
            <Route path="/Contact" exact element={<Contact/>} />
            <Route path="*" element={404} />
    </Routes>
   
    </>
  );
}


export default App;