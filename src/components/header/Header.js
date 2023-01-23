import './header.css'
import Cta from '../cta/Cta'
import HeaderSocials from './HeaderSocials'
import me from '../../assets/perfilP.jpg'
import Typed from 'typed.js';
import { useEffect, useRef } from "react";


export const Header = () => {
  
/*&#60;p&#62;Programando ando...&#60;&#47;p&#62;*/ 

const el = useRef(null);
useEffect(() => {
  const typed = new Typed(el.current, {
    strings: ["&#60;p&#62;Programando ando...&#60;&#47;p&#62;"], 
    startDelay: 300,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    smartBackspace: true,
    showCursor: true,
    
  });

  // Destropying
  return () => {
    typed.destroy();
  };
}, []);


  return (
    <header>
      <div className='container header__container'>
        <h5 className='hi' >Hablate !</h5>
        <h1 className='name'>Soy Billy </h1>
       
        <span ref={el}></span>
        
        <Cta/>
        <HeaderSocials/>
        <div className='me'>
          <a href='https://www.linkedin.com/in/billy-andrys-67786718b/'  target='_blank'><img className='meB' src={me} alt='me' /></a> 
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header