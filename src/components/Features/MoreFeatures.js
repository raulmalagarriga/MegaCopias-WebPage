import React from 'react'
//import Contact from '../Contact/Contact';
import { NavMoreServices } from '../NavBar/NavMoreServices'
import featureimage from './../../images/Ploteo.png';
import featureimage2 from './../../images/Copias.png';
import featureimage3 from './../../images/Impresion.png';
import featureimage4 from './../../images/Rotulado.png';
import featureimage5 from './../../images/Plastificado.png';
import featureimage6 from './../../images/Encuadernado.png';
import FeatureBox from './FeatureBox';

export const MoreFeatures = () => {
  return (
      <>
        <div className='App'>
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
                            <FeatureBox image={featureimage4} title='Carpetas' p='Carpetas de tamaño carta y oficio, tipo marron y manila.'/>
                            <FeatureBox image={featureimage6} title='Sobres' p='Sobres de tamaño carta, oficio y doble carta.'/>
                            <FeatureBox image={featureimage6} title='Material de oficina' p='Boligrafos, huelleros, resaltadores y todo lo que necesitas para tu oficina.'/>
                        </div>
                        <div className='a-container'>
                            <FeatureBox image={featureimage6} title='Cartulinas' p='Cartulinas tamaño carta de colores y tapas plasticas para sus encuaderndos.'/>
                            <FeatureBox image={featureimage5} title='Plastificados' p='Plastificamos sus cedulas, licencias, menus...'/>
                            <FeatureBox image={featureimage6} title='Utiles escolares' p='Cuadernos tesis, pegas, colores, lapices, marcadores y mucho mas.'/>
                        </div>
                        <h2 id='sublimate'>Sublimado</h2>
                        <div className='a-container'>
                            <FeatureBox image={featureimage4} title='Tasas' p='Rotulamos sus stickers perfectos para su marca'/>
                            <FeatureBox image={featureimage5} title='PPP' p='Plastificamos sus cedulas, licencias, menus...'/>
                            <FeatureBox image={featureimage6} title='Encuadernados' p='Los mejores encuadernados plasticos y metalicos de libretas, guias, cuadernos y mucho mas'/>
                        </div>
                        <h2 id='labeled'>Rotulado</h2>
                        <div className='a-container'>
                            <FeatureBox image={featureimage4} title='Stickers' p='Rotulamos sus stickers perfectos para su marca.'/>
                            <FeatureBox image={featureimage4} title='En vinil' p='Rotulamos sus figuras en vinil, perfecto para los vasos o termos.'/>
                            <FeatureBox image={featureimage4} title='Figuras' p='Figuritas'/>
                        </div>
                        <h2 id='bound'>Encuadernado</h2>
                        <div className='a-container'>
                            <FeatureBox image={featureimage6} title='Anillo normal' p='Encuadernado perfecto para libros o guias de pocas paginas.'/>
                            <FeatureBox image={featureimage6} title='Anillo en espiral plastico' p='Encuadernado con mayor capacidad de paginas.'/>
                            <FeatureBox image={featureimage6} title='Anillo en espiral metalico' p='Encuadernado metalico de gran capacidad de paginas y excelente calidad.'/>
                        </div>
                        <h2 id='digitalservices'>Servicios digitales</h2>
                        <div className='a-container'>
                            <FeatureBox image={featureimage4} title='Diseño Grafico' p='Creamos tu marca, logo, digitalizamos tus ideas.'/>
                            <FeatureBox image={featureimage5} title='Escaneado de documentos' p='Digitalizamos tus documentos y los guardamos a tu almacenamiento digital preferido.'/>
                            <FeatureBox image={featureimage6} title='Transcripciones' p='Transcribimos sus documentos a la medida que usted necesite.'/>
                        </div>
                </div>
            </div>
        </div>
    </>
  )
}
