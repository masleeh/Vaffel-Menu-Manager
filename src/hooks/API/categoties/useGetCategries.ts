import React, {useState, useEffect} from "react"
import axios from "axios"

export interface ICategories {
    name: string,
    id?: number,
    isSelected?: boolean,
    switchActive?: Function
}

const useGetCategories = () => {
    const [categories, setCategories] = useState<ICategories[]>([])
    
    const getCategories = async () => {
        const token = localStorage.getItem('vaffel_token')
        const allCategories = await axios.get<ICategories[]>('http://localhost:5000/api/v1/categories', {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        allCategories.data.unshift({name: 'Все позиции', id: 0})
        setCategories(allCategories.data.map(item => {
            if (item.name === "Все позиции") return {...item, isSelected: true}
            return {...item, isSelected: false}
        }))
    }

    useEffect(() => {
        getCategories()
    }, [])

    return {categories, setCategories}
}

export default useGetCategories