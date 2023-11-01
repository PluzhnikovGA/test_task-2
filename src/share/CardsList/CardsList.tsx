import React, {useContext} from 'react';
import styles from './cardslist.css';
import {contextData} from '../../context/DataContext';
import {IUseData} from '../../hooks/useData';
import {Card} from "./Card";


export function CardsList() {
  const data: IUseData[] = useContext(contextData);


  if (Object.keys(data[0]).length === 0) {
    return (
      <div>
        Загрузка...
      </div>
    );
  } else if (!data[0].found) {
    return (
      <div>
        По вашему запросу ничего не найдено.
      </div>
    );
  }

  return (
    <ul className={styles.cardsList}>
      {data.map((item) => (
        <Card
          key={`${item.name}-${item.email}-${item.phone}`}
          name={item.name} email={item.email} phone={item.phone}
          position_name={item.position_name} department={item.department} hire_date={item.hire_date}/>
      ))}
    </ul>
  );

}
