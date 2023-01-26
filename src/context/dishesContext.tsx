import React, {useState, createContext, ReactNode} from "react";
import { IChildren, IDishes } from "../types/Dishes";
import useGetDishes from "../hooks/API/dishes/useGetDishes";

interface IDishContext {
    activeDishId: number,
    setActiveDishId: Function,
    dishes: IDishes[],
    getAllDishes: Function,
    setDishes: Function
}


export const DishesContext = createContext<IDishContext>(null!) 

const DishesContextProvider:React.FC<React.PropsWithChildren> = ({children}) => {
    const [activeDishId, setActiveDishId] = useState<number>(0)
    const {dishes, setDishes, getAllDishes} = useGetDishes()

    const value:IDishContext = {
        activeDishId,
        setActiveDishId,
        dishes,
        getAllDishes,
        setDishes
    }
    
    return (
        <DishesContext.Provider value={value}> {children} </DishesContext.Provider>
    )

}

export default DishesContextProvider