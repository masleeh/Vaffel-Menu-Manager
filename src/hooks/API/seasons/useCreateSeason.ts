import axios from "axios";

const useCreateSeason = (updateFunc:Function) => {
    const createSeason = async () => {
        const token = localStorage.getItem('vaffel_token')
        await axios.post(`http://localhost:5000/api/v1/seasons/`, {
            image_link: 'New season promotion'
        }, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        updateFunc()
    }

    return {createSeason}
}

export default useCreateSeason