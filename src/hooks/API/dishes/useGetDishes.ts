import React, {useState, useEffect} from "react"
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
        setDishes(dishess.data.map(item => {
            return {...item, isSelected: false}
        }))
    }

    useEffect(() => {
        getAllDishes()
    }, [])

    return {dishes, setDishes}
}

export default useGetDishes