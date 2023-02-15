import React from 'react'
import {  NavLink } from 'react-router-dom'

const HeaderSwitch:React.FC = () => {


    return (
        <div className='header'>
            <NavLink to="menu" className={'header-button'}>Меню</NavLink>
            <NavLink to="promotions" className={'header-button'}>Акции</NavLink>
            <NavLink to="seasons" className={'header-button'}>Сезонное</NavLink>
        </div>
    )
}

export default HeaderSwitch