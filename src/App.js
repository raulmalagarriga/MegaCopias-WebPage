import React  from "react";
import Header from "./components/Header/Header";
import Feature from "./components/Features/Feature";
import About from "./components/About/About";
import Presentation from "./components/Presentation/Presentation";
import Contact from "./components/Contact/Contact";
import aboutImage from "./images/about.jpg";

const  App = () => {
  return (
    <div className="App">
        <Header />
        <Feature />
        <About  
          image={aboutImage} 
          title='¿Donde estamos?' 
          p='Avenida 12 Entre calles 74 - 75, Maracaibo, Estado Zulia' 
          button='Ubicanos'
        />
        <Presentation />
        <Contact />
    </div>
  );
}

export default App;
