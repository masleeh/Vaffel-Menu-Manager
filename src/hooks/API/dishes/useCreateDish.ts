import React, {useContext} from 'react'
import axios from 'axios'
import { DishesContext } from '../../../context/dishesContext'
import { ActiveDishContext } from '../../../context/activeDishContext'
import useSwitchActive from '../../helpers/useSwitchActive'

const useCreateDish = () => {
    const {getAllDishes, dishes, setDishes} = useContext(DishesContext)
    const {activeDishId, setActiveDishId} = useContext(ActiveDishContext)
    
    const createNewDish = async () => {
        const token = localStorage.getItem('vaffel_token')
        const response = await axios.post(`http://localhost:5000/api/v1/dishes`, {
            name: "Новое блюдо",
            description: "",
            price: 0,
            discountprice: 0,
            weight_big: 0,
            weight_small: 0,
            calories: 0,
            proteins: 0,
            fats: 0,
            carbos: 0,
            ingredient: "Не выбрано",
            image_link: ""
        }, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        await getAllDishes(response.data.id)
        await setActiveDishId(response.data.id)
        
        const  element = document.querySelector('.dishes')
        setTimeout(() => element?.scrollTo(0, element.scrollHeight + 400), 100)

    }
    return {createNewDish}
}

export default useCreateDish