import React, { useContext } from 'react';
import styles from './cardslist.css';
import { GenericList } from '../GenericList';
import { contextData } from '../../context/DataContext';
import { createListUsers } from '../../utils/js/createListUsers';
import { Card } from './Card';
import { IUseData } from '../../hooks/useData';


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
  } else {
    const list = createListUsers(data);

    return (
      <ul className={styles.cardsList}>
        <GenericList list={list} />
      </ul>
    );
  }
}
