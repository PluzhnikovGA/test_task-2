import { useEffect } from "react";
import { CardContextProvider } from "../../context/CardContextData";
import { IUseData } from "../../hooks/useData";
import { Card } from "../../share/CardsList/Card";
import { IItem } from "../../share/GenericList";
import { createDate } from "./createDate";

export function createListUsers(workers: IUseData[]): IItem[] {
  const newData: IItem[] = [];

  for (const { name, phone, email, address, position_name, department, hire_date } of workers) {
    const data = {
      name,
      phone,
      email,
      address,
      position_name,
      department,
      hire_date: createDate(hire_date)
    };

    const elem: IItem = {
      key: Math.random().toString(36).substring(2, 15) as string,
      As: 'li' as const,
      className: 'list-item',
      component: CardContextProvider({data, children: Card()}),
    };

    newData.push(elem);
  }

  return newData;
}
