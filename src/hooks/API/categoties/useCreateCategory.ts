import React, {useState} from 'react'
import axios from 'axios'

const useCreateCategory = () => {
    const [showCatInput, setShowCatInput] = useState(false)
    const [catValue, setCatValue] = useState<string>('')

    const toggleCatInput = () => {
        setShowCatInput(true)
    }

    const handleCatInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {value} = event.target
        setCatValue(value)
    }

    const createCategory = (name:string) => {
        if (name === undefined) return
        const token = localStorage.getItem('vaffel_token')
        const response = axios.post('http://localhost:5000/api/v1/setcategories', {
            name: name
        }, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        setShowCatInput(false)
        setCatValue('')
    }

    return {showCatInput, setShowCatInput, toggleCatInput, createCategory, catValue, handleCatInputChange}
}

export default useCreateCategory