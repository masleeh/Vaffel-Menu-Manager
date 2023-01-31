import React, {useState, useEffect, useContext} from "react"
import { ActiveDishContext } from "../../context/activeDishContext"
import { IDishes } from "../../types/Dishes"
import useEditSingleDish from "../editSingleDish/useEditSingleDish"

interface ISelects {
    id: number,
    isSelected: boolean
}

const useSwitchActive = (array: any[], setArray: Function, isContext: boolean) => {

    const {setActiveDishId} = useContext(ActiveDishContext)

    const switchActive = (id: number) => {

        setArray(array.map(item => {
            if (id === item.id) {
                if (isContext) setActiveDishId(id)
                if (isContext)  
                return {...item, isSelected: true}
            }
            return {...item, isSelected: false}
        }))
    }

    return {switchActive}
}

export default useSwitchActive