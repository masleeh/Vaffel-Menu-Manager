import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SingleCategory from './SingleCategory'
import useGetCategories from '../../hooks/API/categoties/useGetCategries'
import { ICategories } from '../../hooks/API/categoties/useGetCategries'
import useSwitchActive from '../../hooks/helpers/useSwitchActive'


const Categories:React.FC = () => {
    const {categories, setCategories} = useGetCategories()
    const {switchActive} = useSwitchActive(categories, setCategories, false)

    const renderedCategories = categories.map((element:ICategories, index) => {
        return <SingleCategory key={element.name} name={element.name} switchActive={switchActive} isSelected={element.isSelected} id={element.id}/>
    })

    return <div className='categories'>
        {renderedCategories}
    </div>
}

export default Categories