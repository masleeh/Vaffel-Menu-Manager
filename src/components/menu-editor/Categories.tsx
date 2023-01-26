import React, {useState, useEffect, useContext} from 'react'
import SingleCategory from './SingleCategory'
import useGetCategories from '../../hooks/API/categoties/useGetCategries'
import { ICategories } from '../../hooks/API/categoties/useGetCategries'
import useSwitchActive from '../../hooks/helpers/useSwitchActive'
import useCategoryFilter from '../../hooks/categories/useCategoryFilter'



const Categories:React.FC = () => {
    const {categories, setCategories} = useGetCategories()
    const {switchActive} = useSwitchActive(categories, setCategories, false)

    const {filterDishes} = useCategoryFilter()



    const renderedCategories = categories.map((element:ICategories, index) => {
        return <SingleCategory filterDishes={filterDishes} key={element.name} name={element.name} switchActive={switchActive} isSelected={element.isSelected} id={element.id}/>
    })

    return <div className='categories'>
        {renderedCategories}
    </div>
}

export default Categories