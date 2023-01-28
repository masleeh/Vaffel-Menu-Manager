import React, {useState, useEffect, useContext} from "react"
import { IDishes } from "../../../types/Dishes"
import axios from "axios"

const useGetDishes = () => {
    const [dishes, setDishes] = useState<IDishes[]>([])

    const getAllDishes = async () => {
        const token = localStorage.getItem('vaffel_token')
        const dishess = await axios.get<IDishes[]>('http://localhost:5000/api/v1/dishes', {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        const doneDishes = dishess.data.map(item => {
            // if (item.id === activeDishId) return {...item, isSelected: true}
            return {...item, isSelected: false}
        })
        setDishes(doneDishes)
        return Promise.resolve(doneDishes)
    }

    useEffect(() => {
        getAllDishes()
    }, [])

    return {dishes, setDishes, getAllDishes}
}

export default useGetDishes