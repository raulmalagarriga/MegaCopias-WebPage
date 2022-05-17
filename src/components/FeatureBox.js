import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeatureBox = (props) => {
    
    AOS.init({
        duration: 1000
    })
    
    return ( 
       <div className='a-box' data-aos='fade-up'>
           <div className='a-b-img'>
               <img src={props.image} />
           </div>
           <div className='s-b-text'>
                <h2>{props.title}</h2>
                <p>{props.p}</p>
           </div>
       </div>
     );
}
 
export default FeatureBox;