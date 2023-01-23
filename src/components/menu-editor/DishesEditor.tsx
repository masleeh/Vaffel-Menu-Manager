import React, {useState, useEffect} from 'react'
import SingleDish from './SingleDish'
import {IDishes} from '../../types/Dishes'
import axios from 'axios'

const DishesEditor:React.FC = () => {
    const [dishes, setDishes] = useState<IDishes[]>([])

    const getAllDishes = async () => {
        const token = localStorage.getItem('vaffel_token')
        const dishess = await axios.get<IDishes[]>('http://localhost:5000/api/v1/dishes', {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        setDishes(dishess.data)
    }

    useEffect(() => {
        getAllDishes()
    }, [])

    const renderedSingleDishes = dishes.map((element:IDishes, index) => {
        return (<SingleDish 
                    key={element.description}
                    id={element.id}
                    name={element.name}
                    ingredient={element.ingredient}
                    price={element.price}
                    discountprice={element.discountprice}
                    weight_big={element.weight_big}
                    weight_small={element.weight_small}
                />)
    })

    return <div className='editor'>
        <div className='row'>
            <h1 className="sort-by">Сортировать по:</h1>
            <div className="filter">Цене</div>
            <button className='add-filter'>+</button> 
        </div>
        <div className='row2'>
            <div className='dishes'>
                {renderedSingleDishes}
            </div>
        </div>
    </div>
}

export default DishesEditor