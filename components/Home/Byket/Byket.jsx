// хрень про букеты на главной
import Link from 'next/link';
import styles from './Byket.module.css';
const Byket = () => {
  return (
    <div className={styles.byket}>
        <h1 className={styles.byket__title}>Индивидуальный цветок по Вашим пожеланиям</h1>
        <h2 className={styles.byket__text}>Огромный ассортимент цветов в нашей студии обновляется несколько раз в неделю. 
          <br />Наши флористы любят проявлять творчество и учитывать все ваши пожелания в 
          <br /> индивидуальных букетах
          <br />
          <br />Заполните форму по кнопке ниже, чтобы заказать букет по Вашему бюджету и 
          <br /> пожеланиям. Наш флорист свяжется удобным для Вас способом, отправит ссылку для 
          <br /> оплаты и выполнит заказ

        </h2>
        <Link href='/Link'>
            <button className={styles.byket__button}>Заказать индивидуальный цветок</button>
        </Link>
    </div>
  );
}
export default Byket;