import React, {useContext} from 'react'
import { ICategories } from '../../hooks/API/categoties/useGetCategries'
import useShowIcon from '../../hooks/helpers/useShowIcon'
import useDeleteCategory from '../../hooks/categories/useDeleteCategory'
import { DishesContext } from '../../context/dishesContext'

const SingleCategory:React.FC<ICategories> = ({name, isSelected, switchActive, id, filterDishes, getCategories}) => {

    const {isShowIcon, mouseOut, mouseOver} = useShowIcon()
    const {deleteCategory} = useDeleteCategory()
    const {getAllDishes} = useContext(DishesContext)

    const filterName = ():string => {
        if (name.length > 17) {
            return name.slice(0, 16) + '...'
        }
        else return name
    }

    return <div className={isSelected ? 'categories-single yellow' : 'categories-single'} onClick={() => {
        switchActive!(id)
        filterDishes!(name)
        }}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        >
        {filterName()}

        {id !==0 && (isShowIcon && <button className='categories-single-delete' onClick={async (event) => {
            event.stopPropagation()
            await deleteCategory(id!)
            getAllDishes()
            getCategories!()
        }}></button>)}
    </div>
}

export default SingleCategory