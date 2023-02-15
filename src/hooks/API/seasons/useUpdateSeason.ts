import {useState} from 'react'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase"
import axios from 'axios';

const useUpdateSeason = (updateFunc: Function, prevLink:string, id:number) => {
    const [imageUpload, setImageUpload] = useState<File>()

    const uploadImage = async (imageName:string) => {
        if (imageUpload === undefined) return prevLink
        const imageRef = ref(storage, `seasons/${imageName}`)
        const successUpload = await uploadBytes(imageRef, imageUpload)
        const url:string = await getDownloadURL(successUpload.ref)
        return Promise.resolve(url)
    }

    const updateSeason = async () => {
        const token = localStorage.getItem('vaffel_token')
        const url = await uploadImage(id.toString())
        
        await axios.patch(`http://localhost:5000/api/v1/seasons/${id}`, {image_link: url}, {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        setImageUpload(undefined)
        updateFunc()

    }

    return {imageUpload, setImageUpload, updateSeason}
}

export default useUpdateSeason