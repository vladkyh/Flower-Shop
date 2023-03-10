import styles from './TermsOfReturn.module.css';
const TermsOfReturn = () => {
  return (
    <>
       <div className='container__medium'>
          <div className={styles.privacy}>
            <strong className={styles.privacy_h}>
              Политика в отношении обработки персональных данных
            </strong>
           <br /> 
           <strong className={styles.privacy_h}>
              Уважаемые покупатели!
          </strong>
          <p className={styles.privacy_p}>Студия цветов POLYANA доводит до Вашего сведения, что в соответствии с Законом Российской Федерации «О защите прав потребителей» от 07.02.1992 № 2300-1 (в ред. от 25.10.2007г.) и Постановлением Правительства Российской Федерации от 19.01.1998 № 55 (в ред. 27.03.2007г.) срезанные цветы и горшечные растения надлежащего качества обмену и возврату не подлежат. <br />
            <br /> В случае обнаружения недостатков в поставленной цветочной композиции, если они не были оговорены, Вы по своему выбору вправе:
            <br /> -потребовать замены на аналогичную цветочную композицию эквивалентной стоимости;
            <br /> -потребовать замены на цветочную композицию иной стоимости с соответствующим перерасчетом покупной цены;
            <br /> -потребовать соразмерного уменьшения покупной цены цветочной композиции;
            <br /> -потребовать безвозмездного устранения недостатков цветочной композиции или возмещения расходов на их исправление Вами или третьим лицом;
            <br /> 
            <br /> отказаться от исполнения договора купли-продажи и потребовать возврата уплаченной за цветочную композицию сумму. По нашему требованию и за наш счет Вы должны возвратить цветочную композицию с недостатками.</p>
          </div>
        </div>
    </>
  );
}
export default TermsOfReturn;
