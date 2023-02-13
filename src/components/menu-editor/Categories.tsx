import React, {useContext} from 'react'
import SingleCategory from './SingleCategory'
import useGetCategories from '../../hooks/API/categoties/useGetCategries'
import { ICategories } from '../../hooks/API/categoties/useGetCategries'
import useSwitchActive from '../../hooks/helpers/useSwitchActive'
import useCategoryFilter from '../../hooks/categories/useCategoryFilter'
import useCreateCategory from '../../hooks/API/categoties/useCreateCategory'
import useDisableSelect from '../../hooks/helpers/useDisableSelect'
import { DishesContext } from '../../context/dishesContext'



const Categories:React.FC = () => {
    const {categories, setCategories, getCategories} = useContext(DishesContext)
    const {switchActive} = useSwitchActive(categories, setCategories, false)

    const {filterDishes} = useCategoryFilter()

    const {showCatInput, toggleCatInput, catValue, setShowCatInput, handleCatInputChange, createCategory} = useCreateCategory()
    const {selectRef} = useDisableSelect(showCatInput, setShowCatInput)



    const renderedCategories = categories.map((element:ICategories, index) => {
        return <SingleCategory
            filterDishes={filterDishes} 
            key={element.name} 
            name={element.name} 
            switchActive={switchActive} 
            isSelected={element.isSelected} 
            id={element.id}
            getCategories={getCategories}/>
    })

    return <div className='categories'>
        {renderedCategories}
        <div className="categories-add" ref={selectRef}>
            <button className={!showCatInput ? 'categories-button' : 'hide'}  onClick={toggleCatInput}>+</button>
            {showCatInput && <div className='categories-row'>
                                <input className='categories-input' placeholder='Новая категория' value={catValue} onChange={handleCatInputChange}/>
                                <div className='categories-image' onClick={() => {
                                    createCategory(catValue!)
                                    getCategories()
                                }}></div>
                            </div>}
        </div>
    </div>
}

export default Categories