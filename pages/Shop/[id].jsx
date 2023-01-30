// страница определенного товара
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import styles from './Shop.module.css';
import Image from 'next/image';
import ByButton from "components/ByButton";
// Отвечаю на резонный вопрос: почему здесь не используется SSR ИЛИ SSG? некст обновился до 13 примерно неделю назад и я не могу понять как теперь это работает, ни по документации, а все видео исспользуют 12 версию и ниже, поэтому сорян(
const FlowerDescript = () => {
  const router = useRouter();
  const  {id}  = router.query;
  const [flowers, setFlowers] = useState(null)
  
  useEffect(() => {
  const fetchData = async()=>{
      const  {id}  = router.query;
      const withData = await fetch(`https://63937275ab513e12c50ec114.mockapi.io/flower`);
      const data = await withData.json();
      console.log(id);
      console.log(data[id-1]);
      setFlowers(data[id-1])  
      
      //setGetId(id)
      if (!data) {
        return {
          notFound: true,
        }
      }
}
fetchData();
}, [id])
  return (
    <>
     <Head><title>Сделать заказ по номеру телефона или whatsapp</title></Head>
     <div>
        <div className={styles.arrow} onClick={() => router.back()}></div >
        <h1>Товар под номером: {id} </h1>
        <div >
          { flowers &&(
              <div className={styles.id}>
                <Image className={styles.flower__img} src={flowers.photo} alt='xz' width={500} height={700}/>
                <div className={styles.id__info}>
                  <h1 className={styles.id__name}>{flowers.name}</h1>
                  <div className={styles.id__count}>{flowers.price}р.</div>
                
                  <ByButton text={'Добавить в корзину'} photo={flowers.photo} price={flowers.price}  key={flowers.id} id={flowers.id} name={flowers.name} count={flowers.count} desriptoin={flowers.desriptoin}/>
                  <div className={styles.id__desr}>{flowers.desriptoin}</div>
                  <div className={styles.id__category}>Категория: {flowers.category}</div>
                  
                </div >
              </div>
          )}
        </div>
     </div>
    </>
  );
}
export default FlowerDescript;
