import Link from 'next/link';
import styles from './Footer.module.css';
import logo from 'public/flower-svgrepo-com.svg';
import Image from 'next/image';
import routesConfigFooter from 'router/routerConfigFooter';
import cn from 'classnames';
import { useRouter } from 'next/router';

const Footer = () => {
  const {pathname} = useRouter();
  return (
    <>
        <div className={styles.footer}>
          <div className={styles.links}>
            {routesConfigFooter.map(({title,path,element})=>(
                <Link
                    className={cn(styles.link, pathname === path ? styles.active : null)}
                    key={title}
                    href={path}>
                      
                  {title} 
                </Link>
            ))}
          </div>
          <div className={styles.img}>
            <Image
              className={styles.logo__img}
              src={logo}
              alt="logo"
            />
          </div>
        </div>    
    </>
  );
}
export default Footer;
