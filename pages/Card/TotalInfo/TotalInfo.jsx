// карточка в корзине справа
import { useState } from 'react';
import styles from './TotalInfo.module.css';
import CardOrder from 'components/CardOrder';
const TotalInfo = ({price,count}) => {
  const [active, setActive] = useState(false)
  const callBackActive = () =>{
    setActive(!active)
    console.log(active);
  }
  return (
    <>
        <div className={styles.total}>
              <div className={styles.card__price}>
                Общая цена:<span>{price}р.</span>
              </div>
              <div className={styles.card__count}>
                Всего товаров:<span>{count}шт.</span>
              </div>
              <div className={styles.card__dost}>
                <strong className={styles.card__dost}>Доставка: </strong>
                <span className={styles.card__dost__choose}>Выбрать адрес доставки</span>
              </div>
              <div>
                <button onClick={() => callBackActive()} className={styles.card__button}>
                  Заказать
                </button>
              </div>
              <div className={styles.card__count}>
                <label>
                  <input type="checkbox" />
                  Согласен с условиями Правил пользования <br /> торговой площадкой и правилами возврата
                </label>
              </div>
          </div> 
          {
                active &&
              <CardOrder active={active} setActive={setActive}/>
              }
    </>
  );
}
export default TotalInfo;
