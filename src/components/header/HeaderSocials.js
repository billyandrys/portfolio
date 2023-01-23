import React from 'react';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/billy-andrys-67786718b/' target='_blank'>
      <BsLinkedin/></a>
      <a href='https://github.com/billyandrys' target='_blank'>
      <BsGithub/></a>
      <a href='https://www.facebook.com/BillyAndrys/' target='_blank'>
      <BsFacebook/></a>
    </div>
  );
}

export default HeaderSocials;
