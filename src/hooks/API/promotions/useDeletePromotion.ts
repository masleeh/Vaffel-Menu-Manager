import axios from "axios";
import { useContext } from "react";
import { PromotionsContext } from "../../../context/promotionsContext";

const useDeletePromotion = () => {
    const {getAllPromotions} = useContext(PromotionsContext)

    const deletePromotion = async (id:number) => {
        const token = localStorage.getItem('vaffel_token')
        await axios.delete(`http://localhost:5000/api/v1/promotions/${id}`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        getAllPromotions()
    }

    return {deletePromotion}
}

export default useDeletePromotion