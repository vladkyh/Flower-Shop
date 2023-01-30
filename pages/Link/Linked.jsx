// честно говоря не понимаю почему у этой страницы путь Link, но ладно
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from 'next/link';
import MetaTags from 'utils/MetaTags';
const Linked = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 200000);
  }, [router])
  return (
    <div>
      <MetaTags title='Ссылки на автора'/>

        <h1>тут должна быть ваша ссылка ^^</h1>
        <br />
         <div className='myhref'>   
          <Link  href='https://web.telegram.org/z/#-1660215639'>Телеграм: @CharaDremm</Link>  
                </div> 
        <br /> 
        <div className='myhref'>    
        <Link  href='https://github.com/vladkyh'>Github: vladkyh</Link>       
         </div> 
        <br />
         <div className='myhref'>
           <Link  href='https://novosibirsk.hh.ru/resume/e948f266ff0ba8aa680039ed1f6f6463465475'>hh: Куницкий Владислав</Link>            
           </div> 
        <br />
         <div className='myhref'> 
         <Link  href='#'>Телефон: +79538041360</Link>        
            </div>
        
    </div>
  );
}
export default Linked;
