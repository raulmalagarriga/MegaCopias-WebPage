import React , {useState} from 'react';
import logo from './../../images/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [nav , setNav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50){
            setNav(true);
        }else{
            setNav(false);
        }
    }
    window.addEventListener('scroll' , changeBackground);

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
                <li><a href='#main'  className={'active'}>Inicio</a></li>
                <li><a href='#features1'>Los mas vendidos</a></li>
                <li><a href='#about'>¿Donde estamos?</a></li>
                <li><a href='#contact'>Contactanos</a></li>
                <li><Link to="/more-services" className='btn-btn'>Mas serivicios</Link></li>
                <li><Link to="/pdf" target='_blank' className='btn-btn'>Trabajos</Link></li>
            </ul>
        </nav>
    );
}
 
export default NavBar;