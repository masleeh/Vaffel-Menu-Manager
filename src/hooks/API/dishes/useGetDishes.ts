import React, {useState, useEffect, useContext} from "react"
import { IDishes } from "../../../types/Dishes"
import { ActiveDishContext } from "../../../context/activeDishContext"
import axios from "axios"

const useGetDishes = () => {
    const [dishes, setDishes] = useState<IDishes[]>([])
    const {activeDishId} = useContext(ActiveDishContext)

    const getAllDishes = async (dishId?:number) => {
        const token = localStorage.getItem('vaffel_token')
        const dishess = await axios.get<IDishes[]>('http://localhost:5000/api/v1/dishes', {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        const doneDishes = dishess.data.map(item => {
            if (dishId) {
                if (item.id === dishId) return {...item, isSelected: true}
            }
            return {...item, isSelected: false}
        })
        setDishes(doneDishes)
        return Promise.resolve(doneDishes)
    }

    useEffect(() => {
        getAllDishes(activeDishId)
    }, [])

    return {dishes, setDishes, getAllDishes}
}

export default useGetDishes