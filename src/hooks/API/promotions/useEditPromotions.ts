import {useState, useEffect, useContext} from 'react'
import { IPromotion } from '../../../types/Promotions'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase"
import axios from 'axios';
import { PromotionsContext } from '../../../context/promotionsContext';



const useEditPromotions = (propsPromotion:IPromotion) => {
    const [promotion, setPromotion] = useState<IPromotion>(propsPromotion)
    const [imageUpload, setImageUpload] = useState<File>()
    const {promotions, getAllPromotions} = useContext(PromotionsContext)

    useEffect(() => {
        setPromotion(propsPromotion)
    }, [promotions])


    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target
        setPromotion({...promotion, [name]: value})
    }

    const resetPromotion = () => {
        setPromotion(propsPromotion)
    }

    const uploadImage = async (imageName:string) => {
        if (imageUpload === undefined) return promotion.image_link
        const imageRef = ref(storage, `promotions/${imageName}`)
        const successUpload = await uploadBytes(imageRef, imageUpload)
        const url:string = await getDownloadURL(successUpload.ref)
        return Promise.resolve(url)
    }

    const updatePromotion = async () => {
        const token = localStorage.getItem('vaffel_token')
        const url = await uploadImage(promotion.title)

        await axios.patch(`http://localhost:5000/api/v1/promotions/${promotion.id}`, {...promotion, image_link: url}, {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        setImageUpload(undefined)
        getAllPromotions()

    }
    

    return {promotion, handleChange, resetPromotion, imageUpload, setImageUpload, updatePromotion}
}

export default useEditPromotions