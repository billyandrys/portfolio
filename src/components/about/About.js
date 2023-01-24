import './about.css'
import me from '../../assets/perfilPortfolioB.png'
import { BsAward }  from 'react-icons/bs'
import { GoProject } from 'react-icons/go'
import { SiLibreoffice } from 'react-icons/si'
import {  useState } from "react";
import Modal from '../modal/Modal'
import ModalEstudy from '../modal/ModalEstudy'
import ModalProjects from '../modal/ModalProjects'

function About() {
  const [ modal, setModal ] = useState(false)
  const [ modalEstudy, setModalStudy] = useState(false)
  const [ modalProject, setModalProject] = useState(false)

  const toogle = ()=>{
    setModal(!modal)
}
const toogleModalStudy = ()=>{
  setModalStudy(!modalEstudy)
}

const toogleModalProject = ()=>{
  setModalProject(!modalProject)
}



  return (
    <section id='about'>
      <h5>Sobre ... </h5>
      <h2>Mí</h2>
      <div className='container about__container'>
        <div className='about__me'>

          <img  src={me} alt='me' className='about__me-image'/>
        </div>

      

      <div className='about__content'>
          <div className='about__cards'>
          <article className='about__card' onClick={()=>toogle()}>
            <BsAward/>
            <h5>Experience</h5>
            <small >1+ Year</small>
            <Modal show={modal} close={toogle}/>
          </article>
          <article className='about__card' onClick={()=>toogleModalStudy()}>
                    <SiLibreoffice/>
                    <h5>Estudios</h5>
                    <small >200+ worlWide</small>
                    <ModalEstudy show={modalEstudy} close={toogleModalStudy}/>
          </article>
          <article onClick={()=>toogleModalProject()} className='about__card'> 
                  <GoProject/>
                    <h5>Proyectos</h5>
                    <small>3+ Completed</small>
                    <ModalProjects show={modalProject} close={toogleModalProject}/>
          </article>
        </div>
        <p className='about__profile'>
        Me he titulado en Tecnología en
        análisis y desarrollo de sistemas de
        información, con una visón general
        sobre los proceso y desarrollo de
        software, con capacidad analítica
        para proporciona soporte y solución a
        los problemas de funcionamiento de
        los sistemas informáticos.
        </p>
        <a href='#contact' className='btn btn-primary'>contáctame</a>

          </div>
      </div>  
      
    </section>
  );
}

export default About;
/* <h5>Sobre ... </h5>
      <h2>Mí</h2>
      <div className='container about__container'>
                <div className='about__me'>
                  <div className='about__me-image'>
                    <img src={me} alt='me'/> 
                  </div>
                </div>
    

        <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card>
                  <BsAward/>
                  <h5>Experience</h5>
                  <small className='about__card'>3+ Year</small>
              </div>
              <article className='about__card>
                    <BiUser/>
                    <h5>Clients</h5>
                    <small className='about__card'>200+ worlWide</small>
                </article>

                <article className='about__card'> 
                  <GoProject/>
                    <h5>Projects</h5>
                    <small className='about__card'>80+ Completed</small>
                </article>
            </div>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non dignissim risus. Ut pulvinar, neque eget efficitur tempus, nisl nibh blandit erat, quis vestibulum libero leo vitae sem. Nulla feugiat ligula id ullamcorper tincidunt. Curabitur ullamcorper sem in facilisis gravida. Suspendisse elit libero, feugiat eu libero id, porttitor fringilla metus. Maecenas
               pharetra sed tortor ut placerat. Donec ac rhoncus
        
              </p>
              <a href='#contact' className='btn btn-primary'>Let' Talk</a>

      </div>
    </div>
      
*/