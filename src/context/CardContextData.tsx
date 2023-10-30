import React from "react";
import { IUseData } from "../hooks/useData";

export interface ICardContextProviderProps {
  data: IUseData,
  children: React.ReactNode,
}

export const cardContext = React.createContext<IUseData>({});

export function CardContextProvider({ data, children }: ICardContextProviderProps) {

  return (
    <cardContext.Provider value={data}>
      {children}
    </cardContext.Provider>
  )
}
