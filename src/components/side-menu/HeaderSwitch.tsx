import React from 'react'

const HeaderSwitch:React.FC = () => {
    return (
        <div className='header'>
            <div className='header-button focused'>Меню</div>
            <div className='header-button'>Акции</div>
            <div className='header-button'>Сезонное</div>
        </div>
    )
}

export default HeaderSwitch