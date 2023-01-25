import {useState, useEffect, useContext} from 'react'
import { IDishes } from '../../types/Dishes'
import { DishesContext } from '../../context/dishesContext'


const useEditSingleDish = (dishes:IDishes[]) => {
    const [editSingleDish, setEditSingleDish] = useState<IDishes>()

    const {activeDishId} = useContext(DishesContext)

    useEffect(() => {
        setEditSingleDish(dishes.find(item => item.id === activeDishId))
    }, [activeDishId])

    const changeDish = (name: string, value:number | string):void => {  
        const newEditDish = {...editSingleDish!, [name]: value}
        setEditSingleDish(newEditDish)
    }

    const handleChangeDish = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target
        let newValue:number | string
        if (name !== "name" && name !== "description" && name !== "ingredient") {
            newValue = Number(value.replace(/[^\d]/g, ''))
        } else {
            newValue = value
        }
        changeDish(name, newValue)
    }

    return {editSingleDish, handleChangeDish, }
}

export default useEditSingleDish