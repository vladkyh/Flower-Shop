import 'animate.css';
import HomeHero from 'components/Home/HomeHero';
import MetaTags from 'utils/MetaTags';
import styles from './Home.module.css';
import {RevealWrapper} from  'next-reveal'
import HomeWhy from 'components/Home/HomeWhy';
import CallFlorist from 'components/Home/CallFlorist';
import Byket from 'components/Home/Byket';
import Carousel from 'components/Home/Carousel';
const Home = () => {
const homeWhy = [
  {id:1, title:'Только свежие цветы', text:'Мы заботимся о клиентах, поэтому выращиваем цветы премиального качества', img:'/flower.svg'},
  {id:2, title:'Фото до доставки', text:'Отправим фото цветка сразу после сборки. Вы сможете внести корректировки и быть уверенны, что цветок идеален!', img:'/photo.svg'},
  {id:3, title:'Бесплатная доставка', text:'Действует на заказы от 3000 руб. в пределах города', img:'/geolockation.svg'},
  {id:4, title:'Подарок к каждому горшочку', text:'Рекомендации по уходу и подкормка в стильном фирменном конверте', img:'/prize.svg'},
]
  return (
    <>
    <MetaTags title='Магазин цветов в Абакане'/>
        <div className={styles.home}>
          {/* HomeHero */}
            <HomeHero></HomeHero>
             {/* carousel */}
             <RevealWrapper rotate={{x:  12,y:40,z:0}} origin='left' delay={500} duration={1000}  viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}> 
            <div className={styles.carousel}>
                <Carousel/> 
            </div >  
            </RevealWrapper>
            {/* homeWhy */}
            <RevealWrapper rotate={{x:  12,y:40,z:0}} origin='right' delay={500} duration={1000}   viewOffset={{top:  55,  right:0,  bottom:  10,  left:5}}> 
            <h1 className={styles.homewhy__title}>Почему уже более 1000 клиентов выбрали нас</h1>
            <ul className={styles.homewhy}>
              {homeWhy.map(({title, text, img,id})=>
                <li className={styles.homewhy__li}  key={id}><HomeWhy title={title} text={text} img={img}/></li>
              )}
            </ul>
            </RevealWrapper>
           {/* florist */}
           <RevealWrapper>
           <CallFlorist/>
           </RevealWrapper>
           {/* byket */}
           <RevealWrapper>
            <Byket/>
          </RevealWrapper>    
        </div>
    </>
  );
}
export default Home;
