import React, {useContext} from 'react'
import SinglePromotion from './SinglePromotion'
import usePromotions from '../../hooks/API/promotions/usePromotions'
import { PromotionsContext } from '../../context/promotionsContext'
import useAddPromotion from '../../hooks/API/promotions/useAddPromotions'


const Promotions:React.FC = () => {
    const {promotions, getAllPromotions} = useContext(PromotionsContext)
    const {addPromotion} = useAddPromotion()

    const renderedPromotions = promotions.map(element => {
        return <SinglePromotion 
            key={element.id} 
            title={element.title} 
            id={element.id}
            description={element.description}
            image_link={element.image_link}
            getAllPromotions={getAllPromotions}/>
    })

    return (
        <div className='promotions-wrapper'>
            <div className="promotion-row">
                <h1 className="promotion-warning">Максимальное количество акций: 6 шт.</h1>
                <button className={promotions.length >= 6 ? "promotion-add-button grey" : "promotion-add-button yellow"} onClick={addPromotion} disabled={promotions.length >= 6 ? true : false}>Добавить акцию</button>
            </div>
        <div className='promotion-inner-block'>
            {renderedPromotions}

        </div>
        </div>
    )
}

export default Promotions