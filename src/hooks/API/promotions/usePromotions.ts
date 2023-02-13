import {useState, useEffect} from 'react'
import axios from 'axios'

interface IPromotions {
    id: number,
    title: string,
    description: string,
    image_link: string
}

const usePromotions = () => {
    const [promotions, setPromotions] = useState<IPromotions[]>([])

    const getAllPromotions = async () => {
        const token = localStorage.getItem('vaffel_token')
        const response = await axios.get(`http://localhost:5000/api/v1/promotions`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        setPromotions(response.data)
    }

    useEffect(() => {
        getAllPromotions()
    }, [])

    return {promotions, getAllPromotions}
}

export default usePromotions