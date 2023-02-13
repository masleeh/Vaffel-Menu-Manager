import React from 'react'
import SinglePromotion from './SinglePromotion'
import usePromotions from '../../hooks/API/promotions/usePromotions'

const Promotions:React.FC = () => {
    const {promotions, getAllPromotions} = usePromotions()

    const renderedPromotions = promotions.map(element => {
        return <SinglePromotion key={element.id}/>
    })

    return (
        <div className='promotions-wrapper'>
            <div className="promotion-row">
                <h1 className="promotion-warning">Максимальное количество акций: 6 шт.</h1>
                <button className="promotion-add-button">Добавить акцию</button>
            </div>
            {renderedPromotions}

        </div>
    )
}

export default Promotions