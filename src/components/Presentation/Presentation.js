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
            {/* <h1>Horario de trabajo</h1> */}
            <h1>Horiario de trabajo</h1>
            <h2>Lunes a Viernes</h2>
            <h3>8:00 A.M - 4:00 P.M</h3>
         </div>
      );
 }
  
 export default Presentation;