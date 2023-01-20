import React from 'react'
import Categories from './Categories'
import DishesEditor from './DishesEditor'

const MenuEditor:React.FC = () => {
    return (
        <div className='menu-editor-wrapper'>
            <Categories />
            <DishesEditor />
        </div>
    )
}

export default MenuEditor