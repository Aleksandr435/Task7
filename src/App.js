import React from "react";
import {BrowserRouter, Link,Routes,Route} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";

function App() { return ( <BrowserRouter>
<div>
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
    <Routes>
      <Route path="/about" element={ <About />}/>
       

      <Route path="/contact" element={ <Contact />}/>
    
      
      <Route path="/" element={ <Home />}/>
    
    </Routes>
  </div>
  
</BrowserRouter>
); }

export default App;

