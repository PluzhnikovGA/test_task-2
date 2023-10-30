import React from "react";

export type changeNameContextType = {
  newName: string;
  onChange: (value: string) => void;
}

export const changeNameContext = React.createContext<changeNameContextType>({
  newName: "",
  onChange: () => {},
});
