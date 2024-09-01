import { createContext, useState } from "react";


export let CounterContext = createContext(0)

export default function CounterContextProvider({children}) {
    const [count, setCount] = useState(0)
    const [userName, setUserName] = useState('ahmed')
    console.log(children);
    return <CounterContext.Provider value={{count,userName } }>
        {children}
       
        
    </CounterContext.Provider>
}