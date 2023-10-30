import React, { useContext } from 'react';
import styles from './cardslist.css';
import { GenericList } from '../GenericList';
import { contextData } from '../../context/DataContext';
import { createListUsers } from '../../utils/js/createListUsers';


export function CardsList() {
  const data = useContext(contextData);

  // return (
  //   <div>
  //     Загрузка...
  //   </div>
  // );

  console.log(data);

  if (Object.keys(data[0]).length === 0) {
    return (
      <div>
        Загрузка...
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
