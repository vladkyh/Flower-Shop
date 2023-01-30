import { useState } from 'react';
import styles from './Sort.module.css';
import { useRef } from 'react';
import { useEffect } from 'react';
const Sort = ({setSort}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeButton, setActiveButton] = useState(0);
    const sortRef = useRef()
    // контент сортировки
    // передаем все эти значения в flowersinfo для регуляции запроса на mockapi
    const list = [
        {name:'популярности', sortType:'category', sortTypeDop:'desc'},
        {name:'цене (меньше)',sortType:'price',sortTypeDop:'ask'},
        {name:'цене (больше)',sortType:'price',sortTypeDop:'desc'},
        {name:'алфавиту',sortType:'name', sortTypeDop:'ask'}
    ];
    const onClickListItem= (i,obj)=>{
        setActiveButton(i)
        setSort(obj)
        console.log(obj);
        setIsVisible(false)
    }
    useEffect(() => {
        const handleClickOutside = (event) =>{
                if(!event.path.includes(sortRef.current)){
                    setIsVisible(false)
                }}
      document.body.addEventListener('click',handleClickOutside)
      return () => document.body.removeEventListener('click',handleClickOutside)
    }, [])
  return (
    <>
        <div ref={sortRef} className={styles.sort}>
            <div className={styles.sort__label}>
                <b>Сортировка по: </b>
                <span className={styles.sort__selected} onClick={() => setIsVisible(!isVisible)}>{list[activeButton].name}</span>
            </div>
            {isVisible &&
             <div className={styles.sort__popup}>
                <ul className={styles.sort__ul}>
                   {list.map((obj,i) => (
                    <li
                    onClick={() => onClickListItem(i,obj)}
                    key={i} 
                    className={activeButton === i ? styles.active : styles.sort__li}
                    >
                        {obj.name}
                    </li>
                   ))}   
                </ul>
            </div>}
        </div>
    </>
  );
}
export default Sort;
