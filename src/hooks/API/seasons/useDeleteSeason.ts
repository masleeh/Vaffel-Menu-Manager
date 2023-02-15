import axios from "axios";

const useDeleteSeason = (updateFunc: Function) => {

    const deleteSeason = async (id:number) => {
        const token = localStorage.getItem('vaffel_token')
        await axios.delete(`http://localhost:5000/api/v1/seasons/${id}`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        updateFunc()
    }

    return {deleteSeason}
}

export default useDeleteSeason