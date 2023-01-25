import React, {useState, createContext, ReactNode} from "react";
import { IChildren } from "../types/Dishes";

interface IDishContext {
    activeDishId: number,
    setActiveDishId: Function
}


export const DishesContext = createContext<IDishContext>(null!) 

const DishesContextProvider:React.FC<React.PropsWithChildren> = ({children}) => {
    const [activeDishId, setActiveDishId] = useState<number>(0)
    console.log(activeDishId)

    const value:IDishContext = {
        activeDishId,
        setActiveDishId
    }
    
    return (
        <DishesContext.Provider value={value}> {children} </DishesContext.Provider>
    )

}

export default DishesContextProvider