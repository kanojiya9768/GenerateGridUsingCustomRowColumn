import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

const MyContext = createContext();



const intialValue = {
    row : 0,
    column : 0,
    totalBoxes : 0,
    showBoxes : false,
    diagColor : "#150220"
}

const ContextProvider = ({children}) =>{


    const [state, dispatch] = useReducer(reducer, intialValue)

    console.log(state);

    return(
        <MyContext.Provider value={{state,dispatch}}>
            {children}
        </MyContext.Provider>
    )
}


const useMyContext = () =>{
    return useContext(MyContext);
}


export {MyContext,ContextProvider,useMyContext}
