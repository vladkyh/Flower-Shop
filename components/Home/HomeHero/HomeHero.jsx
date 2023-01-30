import { useRef } from 'react';
import styles from './HomeHero.module.css';
import Link from 'next/link';
const HomeHero = () => {
    const videoRef = useRef();

  return (

        <div className={styles.hero}>
                <video
                 ref={videoRef}
                 autoPlay
                 loop
                  muted
                 className={styles.video}
                   >         
                    <source src="./mainBackgound.mp4" type="video/mp4"/>       
                </video>
                <div className={styles.background__black}></div>
                <h1 className={styles.hero__title}>
                    Горшечные цветы в
                    <br /> Абакане
                </h1>
                <strong className={styles.hero__strong}>
                Эффектная доставка цветков в крафтовой коробке на воде
                <br /> Бесплатная доставка
                </strong>
                <p className={styles.hero__p}>
                Конверт с подкормкой и рекомендациями в подарок к каждому цветку
                </p>
                <div className={styles.hero__buttons}>
                    <Link href='/Shop'>
                        <button className={styles.button__kat}>
                            Каталог
                        </button>
                    </Link>
                    <Link href='/Link'>
                        <button className={styles.button__sell}>
                            Заказать индивидуальный цветок
                        </button>
                    </Link >
                </div> 
        </div>
  );
}
export default HomeHero;
