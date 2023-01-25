import React from 'react'
import { ICategories } from '../../hooks/API/categoties/useGetCategries'

const SingleCategory:React.FC<ICategories> = ({name}) => {
    const filterName = ():string => {
        if (name.length > 18) {
            return name.slice(0, 17) + '...'
        }
        else return name
    }

    return <div className='categories-single'>
        {filterName()}
    </div>
}

export default SingleCategory