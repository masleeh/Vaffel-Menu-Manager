import React, {useState} from 'react'

interface Ingredient {
    ingredient: string,
    changeDish: Function
}

const IngredientDropdown:React.FC<Ingredient> = (props) => {
    const [isShown, setIsShown] = useState(false)


    return <div className='ingredient'>
        <div className='ingredient-btn' onClick={() => setIsShown(!isShown)}>{props.ingredient}</div>
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