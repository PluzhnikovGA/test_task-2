import React from 'react';
import styles from './genericlist.css';


export interface IItem {
  key?: string;
  id?: string;
  component?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string
}

export interface IGenericListProps {
  list: IItem[];
}

const NOOP = () => {};

export function GenericList({ list }: IGenericListProps): React.ReactElement {
  return (
    <>
      {list.map(({As = 'div', component, onClick = NOOP, className, key, href}) =>(
        <As
          className={className}
          onClick={() => onClick()}
          key={key}
          href={href}
        >
          {component}
        </As>
      ))}
    </>
  );
}
