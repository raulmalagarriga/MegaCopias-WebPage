import React , {useState} from 'react'
import logo from './../../images/logo.png';
import { Link } from 'react-router-dom';


export const NavMoreServices = () => {
    const [nav , setNav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50){
            setNav(true);
        }else{
            setNav(false);
        }
    }
  return (
    <nav className={nav ? 'nav active' : 'nav'}>
            <a href='#' className='logo'>
                <img src={logo} alt=''/>
            </a>
            <input type='checkbox' className='menu-btn' id='menu-btn' />
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to="/" className='btn-btn'>Inicio</Link></li>
                <li><a href='#printcopy'>Impresion y copiado</a></li>
                <li><a href='#stationery'>Papeleria</a></li>
                <li><a href='#sublimate'>Sublimado</a></li>
                <li><a href='#labeled'>Rotulado</a></li>
                <li><a href='#bound'>Encuadernado</a></li>
                <li><a href='#digitalservices'>Digitales</a></li>
            </ul>
        </nav>
  )
}
