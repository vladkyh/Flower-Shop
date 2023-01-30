// Собственно, сама карточка товара
import Link from 'next/link';
import styles from './Flower.module.css';
import Image from 'next/image';
import ByButton from 'components/ByButton';
const Flower = ({id, name, price,count,desriptoin, photo}) => {
  return (
    <>
        <li  className={styles.flower__li} key={id}>
             <Link href={`/Shop/[id]`} as={`/Shop/${id}`}>
                <div className={styles.flower__imgdiv}><Image className={styles.flower__img}  src={photo} alt='xz' width={300} height={400}/></div>
                <div className={styles.flower__card}>
                    <div className={styles.flower__name} >{name}</div>
                    <p className={styles.flower__descr}>{desriptoin}</p>
                    <p className={styles.flower__price}>{price}  р.</p>
                </div >
             </Link>
             <ByButton text={'Купить'} photo={photo} price={price}  key={id} id={id} name={name} count={count} desriptoin={desriptoin}/>
        </li>
    </>
  );
}
export default Flower;
