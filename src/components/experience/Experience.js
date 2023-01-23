import './experience.css'
import { BsBookmarkCheck  } from 'react-icons/bs'



const Experience = () => {
  return (
    <section id='experience'>
        <h5>Habilidades </h5>
        <h2>Tecnologías</h2>


        <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience__content'> 
                        <article className='experience__details'>
                            <BsBookmarkCheck className='experience__details-ico'/>
                            <div>
                              <h4>HTML</h4>
                              <small className='text-light'>Intermedio</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsBookmarkCheck className='experience__details-ico'/>
                            <div>
                              <h4>CSS</h4>
                              <small className='text-light'>Intermedio</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsBookmarkCheck className='experience__details-ico'/>
                            <div>
                              <h4>JAVASCRIPT</h4>
                              <small className='text-light'>Intermedio</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsBookmarkCheck className='experience__details-ico'/>
                            <div>
                              <h4>REACT JS</h4>
                              <small className='text-light'>Intermedio</small>
                            </div>
                        </article>
                    </div> 
                </div>
                  
                  <div className='experience__backend'>
                  <h3>Backend Development</h3>
                    <div className='experience__content'> 
                        <article className='experience__details'>
                            <BsBookmarkCheck className='experience__details-ico'/>
                            <div>
                              <h4>NODE</h4>
                              <small className='text-light'>Intermedio</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsBookmarkCheck className='experience__details-ico'/>
                           <div>
                            <h4>PHP</h4>
                            <small className='text-light'>BASICO</small>
                           </div>
                        </article>
                        <article className='experience__details'>
                            <BsBookmarkCheck className='experience__details-ico'/>
                            <div>
                              <h4>EXPRESS</h4>
                              <small className='text-light'>Intermedio</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsBookmarkCheck className='experience__details-ico'/>
                            <div>
                              <h4>SEQUELIZE POSTGRESQL - MYSQL</h4>
                              <small className='text-light'>Intermedio</small>
                            </div>
                        </article>
                    </div> 
                    
                  </div>
        </div>
    </section>
  );
}

export default Experience;
