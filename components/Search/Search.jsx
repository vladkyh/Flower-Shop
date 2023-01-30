import Image from 'next/image';
import search from 'public/search.svg';
import close from 'public/x.svg';
import { useRef, useState } from 'react';
import styles from './Search.module.css';
import { debounce } from 'lodash';
import { useCallback } from 'react';
const Search = ({value, setValue}) => {
  const [valueTime, setvalueTime] = useState('') 
// юзреф для инпута
  const inputRef = useRef()
  const focusInput= () =>{
    inputRef.current.focus()
    setvalueTime('')
    setValue('')
    } 
    // созадем задержку запросов
 const inputTimer = useCallback(
    
      debounce((str)=>{
        setValue(str)
      },300),
    [],
  )
  const onChangeInput = event =>{
    setvalueTime(event.target.value)
    inputTimer(event.target.value)
  }
  return (

        <div className={styles.search}>
            <input
            ref={inputRef}
             onChange={onChangeInput}
             value={valueTime}
             className={styles.search__input} 
             type="text" 
             placeholder='Поиск' 
             />
            <Image className={ styles.search__svg} src={ search} alt='поиск'/>
            {value && 
            <Image onClick={() =>  focusInput() }
             className={styles.search__svg_close}
              src={close} alt='поиск'
              />}
            </div>
    
  );
}
export default Search;
