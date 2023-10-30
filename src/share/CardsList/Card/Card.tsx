import React, { useContext, useRef, useState } from 'react';
import styles from './card.css';
import { MainInfo } from './MainInfo';
import { Post } from '../../Post';

export function Card() {
  const [isModalOpened, setIsModalOpened] = useState(false)

  const node = document.querySelector('#modal_root');
  if (!node) {

    return null
  };

  return (
    <>
      <a className={ styles.card }
        onClick={() => {
          setTimeout(() => {setIsModalOpened(true)}, 300)
      }}>
        <MainInfo />
      </a>

      {isModalOpened && (
        <Post
          onClose={() => {
            setIsModalOpened(false);
          }}
        />
      )}
    </>
  );
}
