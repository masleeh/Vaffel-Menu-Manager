import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SingleCategory from './SingleCategory'
import useGetCategories from '../../hooks/API/useGetCategries'

export interface ICategories {
    name: string
}

const Categories:React.FC = () => {
    const {categories} = useGetCategories()

    const renderedCategories = categories.map((element:ICategories, index) => {
        return <SingleCategory key={element.name} name={element.name}/>
    })

    return <div className='categories'>
        <SingleCategory name="Все позиции" />
        {renderedCategories}
    </div>
}

export default Categories