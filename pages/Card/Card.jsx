// страница коризны
import MetaTags from 'utils/MetaTags';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from 'store/slices/cardSlice';
import { clearProduct } from 'store/slices/cardSlice';
import styles from './Card.module.css';
import CardItems from 'components/CardItems';
import RemoveCookie from 'hooks/removeCookie';
import cn from 'classnames';
import TotalInfo from './TotalInfo';
const Card = () => {
  

  const {items, totalPrice} = useSelector(state => state.card);
  
  const [count, setCount] = useState(0)
  const [price, setPrice] = useState(1)



  const data = useSelector(state => state.card.items);
  const dispatch = useDispatch()
  const onClickClear = ( ) =>{
    RemoveCookie('yesyes')
    dispatch(clearProduct())
  }
  // передаем данные в корзину
  const [flowers, setFlowers] = useState([])
  useEffect(() => {
    const test = data
    if(test){
      const totalCount = items.reduce((sum,items)=> sum+items.count,0)
      setCount(totalCount)
      setFlowers(test)
      setPrice(totalPrice)
    } 
  }, [data, totalPrice])
  // на случай если корзина пуста
  if (!data) {
    return (<div>Корзина пуста</div>)  
  }
  // Почему carD а не carT? а хрен знает, поздно заметил
  return (
    
    <div className={styles.card}>
      <MetaTags title='Корзина'/>
      <div  className={styles.card__title}>
        <h1 className={styles.card__title_zak}>Корзина</h1>
        {price 
        ?
            <ul className={styles.card__ul}>
               {flowers && flowers.map(({photo,id,name, count,desriptoin,price})=>(
                 <li className={cn(count > 0 ? styles.card_li : styles.card_li_none)} key={id}>
                   <CardItems id={id}name={name}count={count}desriptoin={desriptoin}price={price} photo={photo}/>
                  </li>
               ))}
               <button className={styles.card__button} onClick={onClickClear}>очистить</button>
             </ul>
        :     
            <div>корзина пуста</div>  
        }
           </div >

        <TotalInfo price={price} count={count}/>
            
      
      
      
    </div>
  );
}
export default Card;
