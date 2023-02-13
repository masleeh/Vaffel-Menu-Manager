import React, {useState, useEffect, useContext} from 'react'
import { DishesContext } from '../../../context/dishesContext'
import axios from 'axios'

export interface IBoxCategories {
    name: string,
    dishes_id?: number,
    category_id?: number
}

const useGetBoxCategories = (id:number) => {
    const {dishes} = useContext(DishesContext)
    const [boxCategories, setSingleCategory] = useState<IBoxCategories[]>([])
    
    const getBoxCategories = async () => {
        const token = localStorage.getItem('vaffel_token')
        const categories = await axios.get(`http://localhost:5000/api/v1/categories/${id}`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        setSingleCategory(categories.data)
    }
    
    useEffect( () => {
        getBoxCategories()
    },[id, dishes])

    return {boxCategories, getBoxCategories}
}

export default useGetBoxCategories