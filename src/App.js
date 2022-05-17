import React  from "react";
import Header from "./components/Header";
import Feature from "./components/Feature";
import About from "./components/About";
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";
import aboutImage from "./images/about.jpg";


const  App = () => {
  return (
    <div className="App">
        <Header />
        <Feature />
        <About  image={aboutImage} title='¿Donde estamos?' p='Maracaibo , Venezuela' button='Ubicanos'/>
        <Presentation />
        <Contact />
    </div>
  );
}

export default App;
