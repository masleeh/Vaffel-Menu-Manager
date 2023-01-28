import React, {useContext} from 'react'
import axios from 'axios'
import { DishesContext } from '../../../context/dishesContext'

const useDeleteDish = () => {
    const {getAllDishes, setActiveDishId, activeDishId} = useContext(DishesContext)

    const deleteDish = async () => {
        const token = localStorage.getItem('vaffel_token')
        const response = await axios.delete(
            `http://localhost:5000/api/v1/dishes/${activeDishId}`, {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
        )

        await getAllDishes()
        setActiveDishId(0)
    }

    return {deleteDish}
}

export default useDeleteDish