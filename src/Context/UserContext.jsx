import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export let UserContext = createContext();
export default function UserContextProvider({children}) {
    const [userData, setUserData] = useState(null)

  useEffect(() => {
      // let navigate=useNavigate()
      if (localStorage.getItem('userToken')) {
        setUserData(localStorage.getItem('userToken'))
      }
      // else {
      //   navigate('/login')
      // }
    
    
    }, [])
    

    return <UserContext.Provider value={{userData,setUserData}}>
        {children}
    </UserContext.Provider>
}