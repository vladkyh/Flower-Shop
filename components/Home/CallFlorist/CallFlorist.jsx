import Link from 'next/link';
import styles from './CallFlorist.module.css';
const CallFlorist = () => {
  return (
    <div className={styles.florist}>
        <h1 className={styles.florist__title}>Свяжитесь напрямую с флористом</h1>
        <h2 className={styles.florist__text}>Узнайте подробности об актуальных цветах <br /> и оформите заказ прямо в WhatsApp</h2>
        <Link href='/Link'>
            <button className={styles.florist__button}>Перейти в WhatsApp</button>
        </Link>
    </div>
  );
}
export default CallFlorist;
