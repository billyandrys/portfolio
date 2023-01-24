import  { AiOutlineMail } from 'react-icons/ai'
import { BsMessenger, BsWhatsapp } from 'react-icons/bs'
import './contact.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef()
 
 
  const sendEmail = (e) => {
    e.preventDefault();
   
    emailjs.sendForm('default_service', 'template_o6xyu2i', form.current ,'Qo5HQzGpH9sq9Scea')
   
    e.target.reset()

  };


  return (
    <section id='contact'>
    <h5>Medios para</h5>
    <h2>Contáctarme</h2>
      <div className='container contact__container'>
      <div className='contact__options'> 
          <article className='contact__option'>
          <AiOutlineMail/>
          <h4>Email</h4>
          <h5>billyAndrys@gmail.com</h5>
          <a href='mailto:billyandrys@gmail.com' target='_blank' rel='noopener noreferrer'>Envíame un mensaje</a>
          </article>

          <article className='contact__option'>
          <BsMessenger/>
          <h4>Messenger</h4>
          <h5>Billy Andrys</h5>
          <a href='https://m.me/BillyAndrys/' target='_blank' rel='noopener noreferrer'>Envíame un mensaje</a>
          </article>

          <article className='contact__option'>
          <BsWhatsapp/>
          <h4>Whatsapp</h4>
          <h5>Chatea en WhatsApp</h5>
          <a href='https://api.whatsapp.com/send?phone=573016781946' target='_blank' rel='noopener noreferrer'>Envíame un mensaje</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Tú nombre completo' required/>
          <input type='email' name='email' placeholder='tú email' required />
          <textarea name='message'  cols='30' rows='7' placeholder='tú mensaje' required>

          </textarea>
          <button type='submit' className='btn btn-primary'>Enviar mensaje</button>
      </form>
      </div>
      
    </section>
  );
}

export default Contact;
