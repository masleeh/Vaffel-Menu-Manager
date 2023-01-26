import React, {useState, useEffect} from 'react'
import SingleDish from './SingleDish'
import {IDishes} from '../../types/Dishes'
import EditSingleDish from './EditSingleDish'
import useGetDishes from '../../hooks/API/dishes/useGetDishes'
import useSwitchActive from '../../hooks/helpers/useSwitchActive'
import axios from 'axios'

interface ISelect {
    isSelected: boolean,
    id: number
}

const DishesEditor:React.FC = () => {
    const {dishes, setDishes} = useGetDishes()
    const {switchActive} = useSwitchActive(dishes, setDishes, true)


    const renderedSingleDishes = dishes.map((element:IDishes, index) => {
        return (<SingleDish 
                    selectDish={switchActive}
                    key={element.id}
                    id={element.id}
                    name={element.name}
                    ingredient={element.ingredient}
                    price={element.price}
                    discountprice={element.discountprice}
                    weight_big={element.weight_big}
                    weight_small={element.weight_small}
                    isSelected={element.isSelected!}
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
            <EditSingleDish 
              dishes={dishes}  
            />
        </div>
    </div>
}

export default DishesEditor