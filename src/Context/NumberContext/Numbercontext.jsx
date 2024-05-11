import { createContext, useState } from "react";

//creating a new context variables
export const Numbercontext = createContext({
    initialState: 100,
    updatedState: () => 100,


});


//creating context Provider
export const NumberProvider = ({ children }) => {
    const [initialState, updatedState] = useState(100);
    
   
    
    const value = { initialState, updatedState };

    return (
        <Numbercontext.Provider value={value} >{children}</Numbercontext.Provider>
    )
}

