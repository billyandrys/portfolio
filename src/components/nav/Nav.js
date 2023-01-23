import { useState } from 'react'
import './nav.css'
import { HiHome, HiUserCircle, HiDesktopComputer, HiOutlineCode , HiChatAlt2 } from 'react-icons/hi'

const Nav = () => {
  const [ activeNav, setActiveNav ] = useState('#') 
  return (
    
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><HiUserCircle/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><HiDesktopComputer/></a>
      <a href='#tecnology' onClick={()=>setActiveNav('#tecnology')} className={activeNav === '#tecnology' ? 'active' : ''}><HiOutlineCode/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><HiChatAlt2/></a>

    </nav>
   
  );
}

export default Nav;
