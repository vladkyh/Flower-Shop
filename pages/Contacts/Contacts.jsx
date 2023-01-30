import MetaTags from 'utils/MetaTags';
import styles from './Contacts.module.css';
import Link from 'next/link';
import logo__inst from 'public/inst__icon.svg';
import Image from 'next/image';
import {RevealWrapper} from  'next-reveal'
const Contacts = () => {
  return (
    
    <div className={styles.contact}>
    <MetaTags title='Контакты'/>

    
    <RevealWrapper> 
    <div className={styles.total}>
              <div className={styles.card__price}>
                Наши контакты
              </div>
              <div className={styles.card__count}>
              <Link href="tel:+7 999 999 99 99" className={styles.phone}>+7 999 999 99 99</Link>
              </div>
              <div className={styles.card__dost}>
              <Link href="https://yandex.ru/maps/1095/abakan/house/khakasskaya_ulitsa_55/bUgYcgJmQUQDQFtpfXtzcXRrZA==/?from=tabbar&ll=91.457523%2C53.720812&source=serp_navig&z=17.46" className={styles.phone}>Хакасская улица, 55, Абакан, Республика Хакасия</Link>
              </div>
              <Link className={styles.logo__instag} href='#'><Image className={styles.logo__inst} src={logo__inst} alt="instagramm"/></Link>
              <div>
                <button className={styles.card__button}>
                  <Link href='https://yandex.ru/maps/1095/abakan/house/khakasskaya_ulitsa_55/bUgYcgJmQUQDQFtpfXtzcXRrZA==/?from=tabbar&ll=91.457523%2C53.720812&source=serp_navig&z=17.46'>Открыть на карте</Link >
                </button>
              </div>
              
          </div> 
          </RevealWrapper>

      
    </div>
  );
}
export default Contacts;
