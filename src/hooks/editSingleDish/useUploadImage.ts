import { useState } from "react"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase"

const useUploadImage = () => {
    const [imageUpload, setImageUpload] = useState<File>()

    const uploadImage = async (imageName:string) => {
        if (imageUpload === undefined) return
        const imageRef = ref(storage, `images/${imageName}`)
        const successUpload = await uploadBytes(imageRef, imageUpload)
        const url = await getDownloadURL(successUpload.ref)
        return url
    }

    return {uploadImage, setImageUpload}
}

export default useUploadImage