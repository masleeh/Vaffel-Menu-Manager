import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import useSwitchActive from '../../hooks/helpers/useSwitchActive'

const HeaderSwitch:React.FC = () => {
    const [switchArr, setSwitchArr] = useState([{id: 0, isSelected: true}, {id: 1, isSelected: false}, {id: 2, isSelected: false}])
    const {switchActive} = useSwitchActive(switchArr, setSwitchArr, false)

    return (
        <div className='header'>
            <Link onClick={() => switchActive(0)} to="menu" className={switchArr[0].isSelected ? 'header-button focused' : 'header-button'}>Меню</Link>
            <Link onClick={() => switchActive(1)} to="promotions" className={switchArr[1].isSelected ? 'header-button focused' : 'header-button'}>Акции</Link>
            <Link onClick={() => switchActive(2)} to="seasons" className={switchArr[2].isSelected ? 'header-button focused' : 'header-button'}>Сезонное</Link>
        </div>
    )
}

export default HeaderSwitch