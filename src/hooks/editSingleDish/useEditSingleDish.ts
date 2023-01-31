import {useState, useEffect, useContext} from 'react'
import { IDishes } from '../../types/Dishes'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase"
import { DishesContext } from '../../context/dishesContext';
import { ActiveDishContext } from '../../context/activeDishContext';

import axios from 'axios'


const useEditSingleDish = (dishes:IDishes[]) => {
    const [editSingleDish, setEditSingleDish] = useState<IDishes>()
    const [imageUpload, setImageUpload] = useState<File>()
    const {activeDishId} = useContext(ActiveDishContext)

    const {getAllDishes} = useContext(DishesContext)

    const uploadImage = async (imageName:string) => {
        if (imageUpload === undefined) return editSingleDish!.image_link
        const imageRef = ref(storage, `images/${imageName}`)
        const successUpload = await uploadBytes(imageRef, imageUpload)
        const url:string = await getDownloadURL(successUpload.ref)
        return Promise.resolve(url)
    }


    useEffect(() => {
        setEditSingleDish(dishes.find(item => item.id === activeDishId))
    }, [activeDishId])

    useEffect(() => {
        setImageUpload(undefined)
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

    const updateDish = async () => {
        const token = localStorage.getItem('vaffel_token')
        const url = await uploadImage(editSingleDish!.name)
        changeDish("image_link", url!)

        await axios.patch(`http://localhost:5000/api/v1/dishes/${editSingleDish!.id}`, {...editSingleDish, image_link: url}, {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        setImageUpload(undefined)

        getAllDishes(activeDishId)

    }

    return {editSingleDish, handleChangeDish, changeDish, updateDish, setImageUpload, imageUpload}
}

export default useEditSingleDish