import React, {useState, useEffect} from 'react'
import { ISeason } from '../../../types/Seasons'
import axios from 'axios'

const useGetSeasons = () => {
    const [seasons, setSeasons] = useState<ISeason[]>([])

    const getAllSeasons = async () => {
        const token = localStorage.getItem('vaffel_token')
        const response = await axios.get(`http://localhost:5000/api/v1/seasons/`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        setSeasons(response.data)
    }

    useEffect(() => {
        getAllSeasons()
    }, [])

    return {seasons, getAllSeasons}
}

export default useGetSeasons