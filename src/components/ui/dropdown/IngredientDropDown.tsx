import React, {useState} from 'react'
import useDisableSelect from '../../../hooks/helpers/useDisableSelect'

interface Ingredient {
    ingredient: string,
    changeDish: Function
}

const IngredientDropdown:React.FC<Ingredient> = (props) => {
    const [isShown, setIsShown] = useState(false)
    const {selectRef} = useDisableSelect(isShown, setIsShown)


    return <div className='ingredient' ref={selectRef}>
        <div className='ingredient-btn' onClick={() => setIsShown(!isShown)}>{props.ingredient}<div className={isShown ? 'ingredient-dropdown rotate' : "ingredient-dropdown"}></div></div>
        {isShown && <div className='ingredient-content'>
            <div className='ingredient-item' onClick={() => {
                    props.changeDish('ingredient', 'Не выбрано')
                    setIsShown(false)
                }}>Не выбрано</div>
            <div className='ingredient-item' onClick={() => {
                    props.changeDish('ingredient', 'Курица')
                    setIsShown(false)
                }}>Курица</div>
            <div className='ingredient-item' onClick={() => {
                    props.changeDish('ingredient', 'Свинина')
                    setIsShown(false)
                }}>Свинина</div>
            <div className='ingredient-item' onClick={() => {
                    props.changeDish('ingredient', 'Рыба')
                    setIsShown(false)
                }}>Рыба</div>
        </div>}
    </div>
}

export default IngredientDropdown