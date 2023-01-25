import React, {useState, useEffect} from 'react'
import axios from 'axios'

const useGetBoxCategories = (id:number) => {
    const [boxCategories, setSingleCategory] = useState([])
    
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
    },[])

    return {boxCategories}
}

export default useGetBoxCategories