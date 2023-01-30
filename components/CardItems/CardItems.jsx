
//  Товар в корзине

import styles from './CardItems.module.css';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import SetCookie from 'hooks/setCookie';
import { useEffect } from 'react';
import ByButton from 'components/ByButton';
import Image from 'next/image';
const CardItems = ({id, name, price,count,desriptoin, photo}) => {
      // берем из стора данные совпадающие с нашими
      const {items} = useSelector(state => state.card);
      useEffect(() => {
        const json = JSON.stringify(items)
        SetCookie('yesyes', json)
        console.log(photo);
      }, [items])

  return (
    <>  
              <div className={styles.card__items}>
                <Link href={`/Shop/${id}`}>
                  <div className={styles.card__imgdiv}>
                    <Image className={styles.flower__img} src={photo} alt='xz' width={240} height={300}/>
                  </div>
                 </Link>
               <div className={styles.card__info}>
                  <div className={styles.card__name}>{name}</div>
                  <div className={styles.card__item__price}>общая цена: {count*price}р.</div>
                  <span>{price} р.</span>
                 <ByButton text={'Купить'} photo={photo} price={price}  key={id} id={id} name={name} count={count} desriptoin={desriptoin}/>  
                </div >
              </div > 
    </>
  );
}
export default CardItems;
