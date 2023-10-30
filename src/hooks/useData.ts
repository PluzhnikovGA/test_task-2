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
}

export function useData () {
  const [dataArray, setDataArray] = useState<Array<IUseData>>([{}])
  const {newName, onChange}  = useContext(changeNameContext);

  console.log(typeof newName, newName);
  const valu = ""

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3000?term=${valu}`)
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
          })
        );
        setDataArray(usersData)
      })
      .catch(console.log);
  }, [valu])

  return [dataArray]
}
