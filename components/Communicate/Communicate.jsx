// хрень справа снизу с соц сетями
import Image from 'next/image';
import styles from './Communicate.module.css';
import message from 'public/message__icon.svg'
import phone from 'public/phone__icon.svg'
import whatsapp from 'public/whatsapp__icon.svg'
import viber from 'public/viber_icon.svg'
import close from 'public/x.svg'
import cn from 'classnames'
import { useState } from 'react';
import Link from 'next/link';
const Communicate = () => {
    // делаем развертывание при клике
    const [Active, setActive] = useState(false)
    
  return (
    <>
        <div className={styles.communicate}>
            <span className={Active ? styles.none : styles.call}>Связаться</span>
            <Image
                onClick={() => setActive(!Active)}
                className={cn(styles.message, styles.pulse)}
                src={Active ? close : message}
                alt='message' 
            />
            <Link href='/Link'>
                <Image
                    src={phone}
                    alt='phone'
                    className={cn(styles.phone, Active ? styles.active__phone : null)}
                />
                <Image
                    src={whatsapp}
                    alt='whatsapp'
                    className={cn(styles.whatsapp, Active ? styles.active__whats : null)}
                />
                <Image
                    src={viber}
                    alt='viber'
                    className={cn(styles.viber, Active ? styles.active__viber : null)}
                />
            </Link>
        </div>
    </>
  );
}
export default Communicate;
