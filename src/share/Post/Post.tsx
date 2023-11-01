import React, { MouseEventHandler, useContext, useEffect, useRef } from 'react';
import styles from './post.css';
import ReactDOM from 'react-dom';

interface IPost {
  onClose?: () => void;
  name?: string,
  phone?: string,
  email?: string,
  position_name?: string,
  department?: string,
  hire_date?: string,
}

export function Post({ onClose, name, phone, email, position_name, department, hire_date }: IPost) {
  const refBut = useRef<HTMLButtonElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handelClick(event: MouseEvent) {
      if (event.target instanceof Node && refBut.current?.contains(event.target)) {
        if (!ref.current?.className.includes('modal_win')) {
          onClose?.();
          return;
        }
      }

      if (event.target instanceof Node && ref.current?.contains(event.target)) {
        return
      }

      onClose?.();
    }

    document.addEventListener('click', handelClick);

    return () => {
      document.removeEventListener('click', handelClick)
    }
  }, []);

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal((
    <div className={styles.fixed}>
      <div className={styles.modal} ref={ref}>
        <h2 className={styles.title}>{ name }</h2>
        <button className={styles.button} ref={refBut}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.585786 0.585786C1.36683 -0.195262 2.63317 -0.195262 3.41421 0.585786L10 7.17157L16.5858 0.585786C17.3668 -0.195262 18.6332 -0.195262 19.4142 0.585786C20.1953 1.36683 20.1953 2.63317 19.4142 3.41421L12.8284 10L19.4142 16.5858C20.1953 17.3668 20.1953 18.6332 19.4142 19.4142C18.6332 20.1953 17.3668 20.1953 16.5858 19.4142L10 12.8284L3.41421 19.4142C2.63317 20.1953 1.36683 20.1953 0.585786 19.4142C-0.195262 18.6332 -0.195262 17.3668 0.585786 16.5858L7.17157 10L0.585786 3.41421C-0.195262 2.63317 -0.195262 1.36683 0.585786 0.585786Z" fill="black"/>
          </svg>
        </button>
        <div className={styles.content}>
          <p className={styles.textStyleOne}>Телефон:</p>
          <p className={styles.textStyleTwo}>{ phone }</p>
          <p className={styles.textStyleOne}>Почта:</p>
          <p className={styles.textStyleTwo}>{ email }</p>
          <p className={styles.textStyleOne}>Дата приема:</p>
          <p className={styles.textStyleTwo}>{ hire_date }</p>
          <p className={styles.textStyleOne}>Должность:</p>
          <p className={styles.textStyleTwo}>{ position_name }</p>
          <p className={styles.textStyleOne}>Подразделение:</p>
          <p className={styles.textStyleTwo}>{ department }</p>
        </div>

        <p className={styles.textStyleThree}>Дополнительная информация:</p>
        <p className={styles.textStyleTwo}>Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.</p>

      </div>
    </div>

  ), node);
}
