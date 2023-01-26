import React from 'react'
import { ICategories } from '../../hooks/API/categoties/useGetCategries'

const SingleCategory:React.FC<ICategories> = ({name, isSelected, switchActive, id, filterDishes}) => {
    const filterName = ():string => {
        if (name.length > 18) {
            return name.slice(0, 17) + '...'
        }
        else return name
    }

    return <div className={isSelected ? 'categories-single yellow' : 'categories-single'} onClick={() => {
        switchActive!(id)
        filterDishes!(name)
        }}>
        {filterName()}
    </div>
}

export default SingleCategory