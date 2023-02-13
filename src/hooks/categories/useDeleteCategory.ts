import axios from 'axios'

const useDeleteCategory = () => {
    const deleteCategory = async (id:number) => {
        const token = localStorage.getItem('vaffel_token')
        const response = await axios.delete(`http://localhost:5000/api/v1/setcategories/${id}`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        return Promise.resolve(response)
    }

    return {deleteCategory}
}

export default useDeleteCategory