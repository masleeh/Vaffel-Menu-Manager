import axios from "axios"
import {useContext} from 'react'
import { PromotionsContext } from "../../../context/promotionsContext"

const useAddPromotion = () => {
    const {getAllPromotions} = useContext(PromotionsContext)

    const addPromotion = async () => {
        const token = localStorage.getItem('vaffel_token')
        await axios.post(`http://localhost:5000/api/v1/promotions/`, {
            title: "Новая акция",
            description: "",
            image_link: ""
        }, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        
        getAllPromotions()
    }

    return {addPromotion}
}

export default useAddPromotion