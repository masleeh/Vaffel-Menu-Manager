import React, {useState, useEffect} from 'react'
import axios from 'axios'

export interface IBoxCategories {
    name: string,
    dishes_id?: number,
    category_id?: number
}

const useGetBoxCategories = (id:number) => {
    
    const [boxCategories, setSingleCategory] = useState<IBoxCategories[]>([])
    
    const getCategories = async () => {
        const token = localStorage.getItem('vaffel_token')
        const categories = await axios.get(`http://localhost:5000/api/v1/categories/${id}`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        setSingleCategory(categories.data)
    }
    
    useEffect( () => {
        getCategories()
    },[id])

    return {boxCategories, getCategories}
}

export default useGetBoxCategories