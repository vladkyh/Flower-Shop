// можно сказать, это страница Shop
import styles from './FlowersInfo.module.css';
import {useEffect, useState } from "react";
import Flower from 'components/Flower/Flower';
import Sort from 'components/Sort';
import Search from 'components/Search';
import axios from 'axios';
import Skeleton from 'components/skeleton/Skeleton';

const FlowersInfo = () => {
  // параметр загрузки
  const [isLoading, setIsLoading] = useState(true)
  // c помощью этой переменной получаем данные
  const [flowers, setFlowers] = useState(null)
  // параметры фильтрации. sort - задается из компонента sort  и меняет путь запроса
  // а value  отвечает за поисковую строчку
  const [sort, setSort] = useState({name:'популярности',sortType:'category',sortTypeDop:'desc'});
  const [value, setValue] = useState('')
  useEffect(() => {
    async function fetchData() {
      // делаем запрос
      const res = await axios.get(`https://63937275ab513e12c50ec114.mockapi.io/flower?sortBy=${sort.sortType}&order=${sort.sortTypeDop}`)
      // фильтруем запрос
      const filterFlowers = res.data.filter(xz => {
        return xz.name.toLowerCase().includes(value.toLowerCase())
      })
      // проверяем на загрузку
      if (res) {setIsLoading(false)}
      setFlowers(filterFlowers)
    }    
  fetchData();
}, [sort,value])

  return (
    <>
         <div className={styles.flowers__child}>
            <Search value={value} setValue={setValue}/>
            <Sort  setSort={setSort}/>
         </div>
         <ul className={styles.flower__ul}>
                 {isLoading
                 ? [...new Array(5)].map((_, index) => <Skeleton key={index} />)
                 :flowers && flowers.map(({photo, id, name,count,desriptoin,price}) =>(
                      <Flower photo={photo} price={price}  key={id} id={id} name={name} count={count} desriptoin={desriptoin}/>
              ))}
        </ul>  
    </>
  );
}
export default FlowersInfo;