import React from 'react'
import useGetSeasons from '../../hooks/API/seasons/useGetSeasons'
import SingleSeason from './SingleSeason'
import useCreateSeason from '../../hooks/API/seasons/useCreateSeason'

const Seasons:React.FC = () => {
    const {seasons, getAllSeasons} = useGetSeasons()
    const {createSeason} = useCreateSeason(getAllSeasons)

    const renderedSeasons = seasons.map(item => {
        return <SingleSeason key={item.id} id={item.id} image_link={item.image_link} getAllSeasons={getAllSeasons}/>
    })

    return (
        <div className='season-wrapper'>
            <div className="season-row">
                <h1 className="season-warning">Максимальное количество сезонных акций: 3 шт.</h1>
                <button className={seasons.length >= 3 ? "season-add-button grey" : "season-add-button yellow"} onClick={createSeason} disabled={seasons.length >= 3 ? true : false}>Добавить акцию</button>
            </div>
        <div className='season-inner-block'>
            {renderedSeasons}

        </div>
        </div>
    )
}

export default Seasons