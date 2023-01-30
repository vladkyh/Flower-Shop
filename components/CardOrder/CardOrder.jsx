import styles from './CardOrder.module.css';
import { useEffect, useRef, useState } from 'react';

import PhoneInput from 'react-phone-input-2'
import close from 'public/x.svg';
import Image from 'next/image';
const CardOrder = ({active, setActive}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [visible, setVisible] = useState(true)
    const focusCall = useRef()
    const focusOutside = useRef()

    useEffect(() => {
      const handleClickOutside = (event) =>{
        if (focusOutside.current && focusOutside.current.contains(event.target)) {
          setActive(false)
       console.log(active);
      
        }}
    document.body.addEventListener('click',handleClickOutside)
    
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
    
  }, [])



    const onChangeInputName = event =>{
        setName(event.target.value)
        
      }
    const onChangeInputPhone = event =>{
      setPhone(event.target.value)
      
    }
    const closeCall = () =>{
      setActive(false)
      
    }
    return (
    <>
    <div ref={focusOutside} className={styles.full_screen}></div>
     <div ref={focusCall} className={visible ? styles.callback : 'display__none'}>
        <div className={styles.close}>
          <Image onClick={() =>  closeCall() }
               className={styles.search__svg_close}
                src={close} alt='поиск'
                />
        </div >
        <h1 className={styles.callback__title}>
            Заказать обратный звонок
        </h1>
        <h2 className={styles.callback__text}>
            Введите свой номер телефона, и мы свяжемся с вами в самое ближайшее время
        </h2>
        <form action="#" method='post'>
        
        <input
            name='name'
            onChange={onChangeInputName}
            value={name}
            className={styles.search__input} 
            type="text" 
            placeholder='Ваше имя' 
            />
       
        <input
            name='phone'
            value={phone}
            onChange={onChangeInputPhone}
            className={styles.search__input} 
            type="tel" 
            placeholder='Ваш номер телефона' 
            
            />
            <br />
        <div className={styles.checkbox}>
          <div>Доставка (бесплатно при заказе от 3000)</div>
          <div className={styles.checkbox__input}>
              <input type="checkbox" name="scales" />
              <label for="scales">Самовывоз</label>
          </div>
          
          
          <div className={styles.checkbox__i}>
              <input type="checkbox" name="scales" />
              <label for="scales">Доставка курьером по Новосибирску</label>
          </div>
          
          
          <div className={styles.checkbox__in}>
              <input type="checkbox" name="scales" />
              <label for="scales">Доставка курьером по хакасии</label>
          </div>
          
        </div >
        <input
            name='name'
            onChange={onChangeInputName}
            value={name}
            className={styles.search__input} 
            type="text" 
            placeholder='Дата получения или доставки' 
            />
            <div>Подробности для доставки (при необходимости) </div>
            <input
            name='name'
            onChange={onChangeInputName}
            value={name}
            className={styles.search__input} 
            type="text" 
            placeholder='' 
            />
             <div>Добавьте текст который мы напишем на открытке </div>
            
            <textarea name="comment" cols="30" rows="10"></textarea>
        <button className={styles.callback__button} type='submit'>Отправить</button>
        </form>
             </div>
    </>
    
    
  );
}
export default CardOrder;
