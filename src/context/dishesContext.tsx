import React, {useState, createContext, ReactNode} from "react";
import { IChildren, IDishes } from "../types/Dishes";
import useGetDishes from "../hooks/API/dishes/useGetDishes";
import useGetCategories, { ICategories } from "../hooks/API/categoties/useGetCategries";

interface IDishContext {
    dishes: IDishes[],
    getAllDishes: Function,
    setDishes: Function,
    categories: ICategories[],
    setCategories: Function,
    getCategories: Function
}


export const DishesContext = createContext<IDishContext>(null!) 

const DishesContextProvider:React.FC<React.PropsWithChildren> = ({children}) => {
    const {dishes, setDishes, getAllDishes} = useGetDishes()
    const {categories, setCategories, getCategories} = useGetCategories()

    const value:IDishContext = {
        dishes,
        getAllDishes,
        setDishes,
        categories,
        setCategories,
        getCategories
    }
    
    return (
        <DishesContext.Provider value={value}> {children} </DishesContext.Provider>
    )

}

export default DishesContextProvider