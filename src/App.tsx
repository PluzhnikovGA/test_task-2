import React from "react";
import './main.global.css';
import { Layout } from "./share/Layout";
import { Search } from "./share/Search";
import { CardsList } from "./share/CardsList";
import { contextData } from "./context/DataContext";
import { changeNameContext } from "./context/changeNameContext";
import { useData } from "./hooks/useData";



export function AppComponent() {
  const [usersData] = useData();
  const [name, setName] = React.useState('');

  const NameProvider = changeNameContext.Provider;

  return (
    <NameProvider value={({
      newName: name,
      onChange: setName,
    })}>
      <contextData.Provider value={usersData}>
        <Layout>
          <Search />
          <CardsList />
        </Layout>
        </contextData.Provider>
    </NameProvider>
  );
}
