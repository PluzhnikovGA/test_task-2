import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { changeNameContext } from "../context/changeNameContext";

export interface IUseData {
  name?: string,
  phone?: string,
  email?: string,
  address?: string,
  position_name?: string,
  department?: string,
  hire_date?: string,
  found?: boolean,
}

export function useData (name: string = "") {
  const [dataArray, setDataArray] = useState<Array<IUseData>>([{}])

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3000?term=${name}`)
      .then((resp) => {
        const usersData = resp.data.map(
          (item: IUseData) => ({
            name: item.name,
            phone: item.phone,
            email: item.email,
            address: item.address,
            position_name: item.position_name,
            department: item.department,
            hire_date: item.hire_date,
            found: true,
          })
        );
        setDataArray(usersData)
      })
      .catch(console.log);
  }, [name])


  if (dataArray.length === 0) {
    setDataArray([{found: false}])
  }

  return [dataArray]
}
