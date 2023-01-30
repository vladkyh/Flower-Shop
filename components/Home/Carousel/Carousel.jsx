import Image from 'next/image';
import styles from './Carousel.module.css';
import { useState } from 'react';
import cn from 'classnames'

const Carousel = () => {
  // тут тупо логика слайдера, че еще сказать, хз
    const slider =[
        {id:1,url:'/slider/slider_1.jpg'},
        {id:2,url:'/slider/slider_2.jpg'},
        {id:3,url:'/slider/slider_3.jpg'},
        {id:4,url:'/slider/slider_4.jpg'},
        {id:5,url:'/slider/slider_5.jpg'}, 
      ]
      const [slide, setSlide] = useState(0)
      const [anima, setAnima] = useState(false)
      const prevSlide = () =>{
        setAnima(true)
        setTimeout(() => {
            const isFirstSlide = slide === 0 
            const newIndex = isFirstSlide ? slider.length - 1 : slide - 1;
            setSlide(newIndex)
            setAnima(false)
        }, 100);
      }
      const nextSlide = () =>{
        setAnima(true)
        setTimeout(() => {
            const isLastSlide = slide === slider.length - 1 
            const newIndex = isLastSlide ? 0 : slide + 1;
            setSlide(newIndex)
            setAnima(false)
        }, 100);
      }
  return (
    <>
    <div className={styles.carousel}>
            <div className={styles.carousel__content}>
                  <div className={styles.left} onClick={() => prevSlide()}></div> 
                  <Image className={cn(styles.carousel__img, anima ? styles.goodbay : null) } src={slider[slide].url} width={900} height={1000}  alt="image1"/>
                  <div className={styles.right} onClick={() => nextSlide()}></div>
            </div>
           
    </div>
    </>
  );
}
export default Carousel;
