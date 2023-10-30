import React from "react";

export interface IContextProvider {
  children: React.ReactNode,
}

export const contextData = React.createContext([{}]);
