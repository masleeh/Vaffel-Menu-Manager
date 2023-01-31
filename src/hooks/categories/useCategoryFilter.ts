import { DishesContext } from '../../context/dishesContext'
import React, {useState, useContext} from 'react'
import axios from 'axios'
import { IDishes } from '../../types/Dishes'
import { ActiveDishContext } from '../../context/activeDishContext'

interface DishesCategories {
    dishes_id: number,
    id: number,
    name: string
}

const useCategoryFilter = () => {
    const {getAllDishes, setDishes} = useContext(DishesContext)
    const {activeDishId} = useContext(ActiveDishContext)

    const filterDishes = async (name:string) => {
        const allDishes:IDishes[] = await getAllDishes(activeDishId)

        if (name === "Все позиции") return

        const token = localStorage.getItem('vaffel_token')
        const response = await axios.get<DishesCategories[]>(`http://localhost:5000/api/v1/categorieswdishes`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        const filteredCategories:DishesCategories[] = response.data.filter(item => item.name === name)

        setDishes(allDishes.filter(item => {
            if (filteredCategories.find(element => element.dishes_id === item.id)) return true
            else return false
        }))
    }
    
    return {filterDishes}
}

export default useCategoryFilter