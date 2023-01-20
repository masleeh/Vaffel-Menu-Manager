import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SingleCategory from './SingleCategory'

export interface ICategories {
    name: string
}

const Categories:React.FC = () => {
    const [categories, setCategories] = useState<ICategories[]>([])
    
    const getCategories = async () => {
        const token = localStorage.getItem('vaffel_token')
        const allCategories = await axios.get<ICategories[]>('http://localhost:5000/api/v1/categories', {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        setCategories(allCategories.data)
    }

    useEffect(() => {
        getCategories()
    }, [])

    const renderedCategories = categories.map((element:ICategories, index) => {
        return <SingleCategory key={element.name} name={element.name}/>
    })

    return <div className='categories'>
        <SingleCategory name="Все позиции" />
        {renderedCategories}
    </div>
}

export default Categories