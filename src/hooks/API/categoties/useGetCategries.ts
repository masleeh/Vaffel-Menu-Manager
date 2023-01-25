import React, {useState, useEffect} from "react"
import axios from "axios"

export interface ICategories {
    name: string
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
        setCategories(allCategories.data)
    }

    useEffect(() => {
        getCategories()
    }, [])

    return {categories}
}

export default useGetCategories