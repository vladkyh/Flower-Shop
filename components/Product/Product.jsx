
import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from './Product.module.css';
import icon_paket from 'public/paket_svg.svg'
import Image from 'next/image';
import { useState } from 'react';
import cn from 'classnames';
import { useEffect } from 'react';
const Product = () => {
  // из стора айтемы и общая цена
    const {items, totalPrice} = useSelector(state => state.card);   
    // видимость компонента
    const [visible, setVisible] = useState(false)
    // общее кол-во товаров
    const [count, setCount] = useState(0)
    
// асинхронно получаем count, так как че-то с гидрацией не так
    useEffect(() => {
      const totalCount = items.reduce((sum,items)=> sum+items.count,0)
      setCount(totalCount)
    }, [items, totalPrice])
    
  return (
    <>
        
      {
            count ?(
            <Link
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            className={cn(visible ? styles.products_none :  styles.products)}
            href='/Card'
             >
              <div className={styles.products_raspolo}>
                {
                  visible ?
                  <div className={styles.totalPrice}>
                     <p className={styles.p}>={totalPrice}р.</p>
                  </div>
                  : null
                }
                <div className={styles.visible}>
                  <Image className={styles.paket_icon} src={icon_paket} alt='Cart'/>
                  <p className={styles.link}> {count} </p>
                </div>
              </div>
          </Link>
            ):
            null
    }
    </>
  );
}
export default Product;










// useEffect(() => {
//   const data = localStorage.getItem('my_card')
//   if(data){
//     setTest(JSON.parse(data))
    
//   }
// }, [])

// useEffect(() => {
//   localStorage.setItem('my_card',JSON.stringify(items))







  
//   const totalCount = items.reduce((sum,items)=> sum+items.count,0)
//   setCount(totalCount)
//   console.log(test);
// }, [])