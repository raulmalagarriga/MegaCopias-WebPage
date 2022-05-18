import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from './../../images/Ploteo.png';
import featureimage2 from './../../images/Copias.png';
import featureimage3 from './../../images/Impresion.png';
import featureimage4 from './../../images/Rotulado.png';
import featureimage5 from './../../images/Plastificado.png';
import featureimage6 from './../../images/Encuadernado.png';


const Feature = () => {
    return ( 
        <>
            <div id='features'>
                <div className='a-container' id='features1'>
                    <FeatureBox image={featureimage} title='Ploteo' p='Ploteamos a full color sus publicidades y posters'/>
                    <FeatureBox image={featureimage2} title='Copias' p='Las mejores copias a color y blanco/negro del mercado'/>
                    <FeatureBox image={featureimage3} title='Impresiones' p='Imprimimos sus documentos, fotos, stickers, certificados y mucho mas'/>
                </div>
                <div className='a-container'>
                    <FeatureBox image={featureimage4} title='Rotulados' p='Rotulamos sus stickers perfectos para su marca'/>
                    <FeatureBox image={featureimage5} title='Plastificados' p='Plastificamos sus cedulas, licencias, menus...'/>
                    <FeatureBox image={featureimage6} title='Encuadernados' p='Los mejores encuadernados plasticos y metalicos de libretas, guias, cuadernos y mucho mas'/>
                </div>
            </div>
        </>
     );
}
 
export default Feature;