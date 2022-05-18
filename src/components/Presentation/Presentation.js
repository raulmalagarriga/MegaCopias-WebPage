import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Presentation = () => {

    AOS.init({
        duration: 1000,
        once: true
    })

     return ( 
         <div id='presentaion' data-aos="fade-down">
            <h1>UI Presentation</h1>
            <p>Lorem hdsj sjwo sdhsds sdlsdop sdj lorem lorel das sdad
                dasda sdad lsjfjak 
            </p>
         </div>
      );
 }
  
 export default Presentation;