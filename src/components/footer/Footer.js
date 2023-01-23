import './footer.css'
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
export const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>BillyAndrys</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experiences</a></li>
        <li><a href='#tecnology'>Tecnology</a></li>
        <li><a href='#contact'>Contact</a></li>
        
      </ul>
      <div className='footer__socials'>
          <a href='https://facebook.com' target='_blank'><AiFillFacebook/></a>
          <a href='https://github.com/' target='_blank'><AiFillGithub/></a>
          <a href='https://github.com/' target='_blank'><BsLinkedin/></a>
         
      </div>

     </footer>
  )
}

export default Footer