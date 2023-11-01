import React, { useState } from 'react';
import styles from './card.css';
import { MainInfo } from './MainInfo';
import { Post } from '../../Post';

interface ICardProps {
  name?: string,
  phone?: string,
  email?: string,
  position_name?: string,
  department?: string,
  hire_date?: string,
}

export function Card({ name, email, phone, position_name, department, hire_date}: ICardProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const node = document.querySelector('#modal_root');
  if (!node) {
    return null
  };


  return (
    <>
      <a className={ styles.card }
        onClick={() => {
          setTimeout(() => {setIsModalOpened(true)}, 300);
      }}>
        <MainInfo name={name} email={email} phone={phone} />
      </a>

      {isModalOpened && (
        <Post
          name={name}
          email={email}
          phone={phone}
          position_name={position_name}
          department={department}
          hire_date={hire_date}
          onClose={() => {
            setIsModalOpened(false);
          }}
        />
      )}
    </>
  );
}
