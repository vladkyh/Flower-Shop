
import {useRouter} from 'next/router';
import Link from 'next/link';
import styles from './Header.module.css';
import routesConfig from 'router/routerConfig';
import Image from 'next/image';
import logo from 'public/flower-svgrepo-com.svg';
import logo__inst from 'public/inst__icon.svg';
import cn from 'classnames';
import CallBack from 'components/CallBack';
import { useState } from 'react';

const Header = () => {
  const {pathname} = useRouter();
  // тут переменная отвечает за модальное окно
  const [active, setActive] = useState(false)
  const callBackActive = () =>{
    setActive(!active)
    console.log(active);
  }

  return (
    <>
    {/* тупо верстка... */}
    <nav className={styles.nav}>
        <div className={styles.logo}>
        <Image
          className={styles.logo__img}
          src={logo}
          alt="logo"
        />
        </div>
        <div className={styles.header__content}>
          <div className={styles.links}>
              {routesConfig.map(({title,path,element})=>(
                  <Link
                      className={cn(styles.link, pathname === path ? styles.active : null)}
                      key={title}
                      href={path}
                  >
                    {title} 
                    </Link>
              ))}
          </div>
          <div className={styles.links__social}>
              <Link href="tel:+7 999 999 99 99" className={styles.phone}>+7 999 999 99 99</Link>
              <Link className={styles.logo__instag} href='/Link'><Image className={styles.logo__inst} src={logo__inst} alt="instagramm"/></Link>
              <div className={styles.button}>
                <button
                onClick={() => callBackActive()}
                className={styles.callback}>
                Обратный звонок
                </button>
              </div>
          </div>
        </div>
    </nav>


    {/* модальное окно */}
    {
      active &&
      <CallBack  active={active} setActive={setActive}/>
    }
    </>
  );
}
export default Header;
