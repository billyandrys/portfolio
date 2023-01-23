import  './tecnology.css';
import img1 from '../../assets/henryDog.png'
import clean from '../../assets/clean.png'
const Tecnology = () => {
  return (
    <section id='tecnology'>
      <h5>Proyectos recientes</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={clean} alt='Clean' />
          </div>
            <h3>Clean</h3>
            <div className='portfolio__item-cta'> 
              <a href='https://github.com/billyandrys' className='btn'>Github</a>
              <a href='http://cclean.github.io/' target='_blank' className='btn'>live Demo</a>
            </div>
         </article>
         <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img1} alt='Herny Dogs' />
          </div>
            <h3>Henry Dogs</h3>
            <div className='portfolio__item-cta'> 
              <a href='https://github.com/billyandrys/clientdogs' className='btn'>Github</a>
              <a href='https://iridescent-youtiao-b25959.netlify.app/' target='_blank' className='btn'>live Demo</a>
            </div>
         </article>
         <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img1} alt='Herny Dogs' />
          </div>
            <h3>titulo de portfolio</h3>
            <div className='portfolio__item-cta'> 
              <a href='https://github.com/billyandrys/apidogs' className='btn'>Github</a>
              <a href='https://apidogs-production.up.railway.app/dogs' target='_blank' className='btn'>live Demo</a>
            </div>
         </article>

      </div>
    </section>
  );
}

export default Tecnology;
