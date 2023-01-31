import React, {useState, createContext, ReactNode} from "react";
import { IChildren, IDishes } from "../types/Dishes";
import useGetDishes from "../hooks/API/dishes/useGetDishes";

interface IDishContext {
    dishes: IDishes[],
    getAllDishes: Function,
    setDishes: Function
}


export const DishesContext = createContext<IDishContext>(null!) 

const DishesContextProvider:React.FC<React.PropsWithChildren> = ({children}) => {
    const {dishes, setDishes, getAllDishes} = useGetDishes()

    const value:IDishContext = {
        dishes,
        getAllDishes,
        setDishes
    }
    
    return (
        <DishesContext.Provider value={value}> {children} </DishesContext.Provider>
    )

}

export default DishesContextProvider