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
            <h1>Horario de trabajo</h1>
            <h2>Horiario corrido de lunes a viernes</h2>
            <h3>8:00 A.M - 3:30 P.M</h3>
         </div>
      );
 }
  
 export default Presentation;