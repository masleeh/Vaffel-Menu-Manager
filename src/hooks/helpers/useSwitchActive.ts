import React, {useState, useEffect, useContext} from "react"
import { DishesContext } from "../../context/dishesContext"
import { IDishes } from "../../types/Dishes"

interface ISelects {
    id: number,
    isSelected: boolean
}

const useSwitchActive = (array: any[], setArray: Function, isContext: boolean) => {

    const {setActiveDishId} = useContext(DishesContext)


    const switchActive = (id: number) => {
        setArray(array.map(item => {
            if (id === item.id) {
                if (isContext) setActiveDishId(id)
                return {...item, isSelected: true}
            }
            return {...item, isSelected: false}
        }))

        
    }

    return {switchActive}
}

export default useSwitchActive