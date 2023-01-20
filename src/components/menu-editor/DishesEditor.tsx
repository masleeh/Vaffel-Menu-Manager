import React, {useState, useEffect} from 'react'
import SingleDish from './SingleDish'
import IDishes from '../../types/Dishes'
import axios from 'axios'

const DishesEditor:React.FC = () => {
    const [dishes, setDishes] = useState<IDishes[]>([])

    const getAllDishes = async () => {
        const token = localStorage.getItem('vaffel_token')
        const dishes = await axios.get<IDishes[]>('http://localhost:5000/api/v1/dishes', {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        setDishes(dishes.data)
    }

    useEffect(() => {
        getAllDishes()
    }, [])

    const renderedDishes = dishes.map((element, index) => {
        return <SingleDish />
    })

    return <div className='editor'>
        <div className='row'>
            <h1 className="sort-by">Сортировать по:</h1>
            <div className="filter">Цене</div>
            <button className='add-filter'>+</button> 
        </div>
        <div className='row2'>
            <div className='dishes'>
                {renderedDishes}
            </div>
        </div>
    </div>
}

export default DishesEditor