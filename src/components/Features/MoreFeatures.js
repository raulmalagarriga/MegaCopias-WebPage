import React from 'react'
import Contact from '../Contact/Contact';
import { NavMoreServices } from '../Header/NavMoreServices'
import featureimage from './../../images/Ploteo.png';
import featureimage2 from './../../images/Copias.png';
import featureimage3 from './../../images/Impresion.png';
import featureimage4 from './../../images/Rotulado.png';
import featureimage5 from './../../images/Plastificado.png';
import featureimage6 from './../../images/Encuadernado.png';
import Oficina from './../../images/Oficina.png';
import Tazas from './../../images/Tazas.png';
import Stickers from './../../images/Stickers.png';
import Espiral from './../../images/Espiral.png';
import Diseno from './../../images/Diseno.png';
import Normal from './../../images/Normal.png';
import Metalico from './../../images/Metalico.png';
import Escaneado from './../../images/Escaneado.png';
import Transcripcion from './../../images/Transcripcion.png';
import FeatureBox from './FeatureBox';

export const MoreFeatures = () => {
  return (
      <>
        
            <NavMoreServices />
            <div className='f-container'> 
                <div id='features'>
                        <h2  id='printcopy'>Impresion y copiado</h2>
                        <div className='a-container'>
                            <FeatureBox image={featureimage} title='Ploteo' p='Ploteamos a full color sus publicidades y posters.'/>
                            <FeatureBox image={featureimage2} title='Copias' p='Las mejores copias a color y blanco/negro del mercado.'/>
                            <FeatureBox image={featureimage3} title='Impresiones' p='Imprimimos sus documentos, fotos, stickers, certificados y mucho mas.'/>
                        </div>
                        <h2 id='stationery'>Papeleria</h2>
                        <div className='a-container'>
                            <FeatureBox image={Oficina} title='Carpetas' p='Carpetas de tamaño carta y oficio, tipo marron y manila.'/>
                            <FeatureBox image={Oficina} title='Sobres' p='Sobres de tamaño carta, oficio y doble carta.'/>
                            <FeatureBox image={Oficina} title='Material de oficina' p='Boligrafos, huelleros, resaltadores y todo lo que necesitas para tu oficina.'/>
                        </div>
                        <div className='a-container'>
                            <FeatureBox image={Oficina} title='Cartulinas' p='Cartulinas tamaño carta de colores y tapas plasticas para sus encuaderndos.'/>
                            <FeatureBox image={featureimage5} title='Plastificados' p='Plastificamos sus cedulas, licencias, menus...'/>
                            <FeatureBox image={Oficina} title='Utiles escolares' p='Cuadernos tesis, pegas, colores, lapices, marcadores y mucho mas.'/>
                        </div>
                        <h2 id='sublimate'>Sublimado</h2>
                        <div className='a-container'>
                            <FeatureBox image={Tazas} title='Tazas' p='Rotulamos sus stickers perfectos para su marca'/>
                            {/* <FeatureBox image={featureimage5} title='PPP' p='Plastificamos sus cedulas, licencias, menus...'/> */}
                            {/* <FeatureBox image={featureimage6} title='Encuadernados' p='Los mejores encuadernados plasticos y metalicos de libretas, guias, cuadernos y mucho mas'/> */}
                        </div>
                        <h2 id='labeled'>Rotulado</h2>
                        <div className='a-container'>
                            <FeatureBox image={Stickers} title='Stickers' p='Rotulamos sus stickers perfectos para su marca.'/>
                            <FeatureBox image={featureimage4} title='En vinil' p='Rotulamos sus figuras en vinil, perfecto para los vasos o termos.'/>
                            <FeatureBox image={featureimage4} title='Tags' p='Tags'/>
                        </div>
                        <h2 id='bound'>Encuadernado</h2>
                        <div className='a-container'>
                            <FeatureBox image={Normal} title='Anillo normal' p='Encuadernado perfecto para libros o guias de pocas paginas.'/>
                            <FeatureBox image={Espiral} title='Anillo en espiral plastico' p='Encuadernado con mayor capacidad de paginas.'/>
                            <FeatureBox image={Metalico} title='Anillo en espiral metalico' p='Encuadernado metalico de gran capacidad de paginas y excelente calidad.'/>
                        </div>
                        <h2 id='digitalservices'>Servicios digitales</h2>
                        <div className='a-container'>
                            <FeatureBox image={Diseno} title='Diseño Grafico' p='Creamos tu marca, logo, digitalizamos tus ideas.'/>
                            <FeatureBox image={Escaneado} title='Escaneado de documentos' p='Digitalizamos tus documentos.'/>
                            <FeatureBox image={Transcripcion} title='Transcripciones' p='Transcribimos sus documentos a la medida que usted necesite.'/>
                        </div>
                </div>
            </div>
            <div className='footer'>
                <Contact />
            </div>
    </>
  )
}
