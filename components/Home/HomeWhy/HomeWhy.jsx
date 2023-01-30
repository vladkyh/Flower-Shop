import Image from 'next/image';
import styles from './HomeWhy.module.css';
const HomeWhy = ({title, text, img}) => {
  return (
    <div className={styles.why}>
      <Image className={styles.why__img} width={200} height={200} src={img} alt='svg-шка'/>
        <h2 className={styles.why__title}>{title}</h2>
        <div className={styles.why__text}>{text}</div>
    </div>
  );
}
export default HomeWhy;
