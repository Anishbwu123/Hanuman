import React, { useState } from "react";
const PracticeContext = React.createContext(defaultValue);


const PracticeProvider=({children})=>{
    const[val,setVal]=useState(0)
    const[val1,setVal1]=useState(0)
    const[val2,setVal2]=useState(0)
    return (
        <PracticeContext.Provider value={{
            val,setVal,val1,setVal1,val2,setVal2
        }}>
            {children}
        </PracticeContext.Provider>
    )
}
export {PracticeContext,PracticeProvider}
