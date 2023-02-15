import React from 'react'
import { ISeason } from '../../types/Seasons'
import useDeleteSeason from '../../hooks/API/seasons/useDeleteSeason'
import useUpdateSeason from '../../hooks/API/seasons/useUpdateSeason'

const SingleSeason:React.FC<ISeason> = (props) => {
    const {deleteSeason} = useDeleteSeason(props.getAllSeasons!)
    const {imageUpload, setImageUpload, updateSeason} = useUpdateSeason(props.getAllSeasons!, props.image_link, props.id)

    return <div className='season'>
        <div className='season-image-cont'>
            <img className='season-image' src={props.image_link} alt={"Season promotion image"}/>
        </div>
        <div className='season-item-row'>
            <div className="season-edit-row">
                    <label htmlFor={`file-uploads${props.id}`} className="season-upload">Загрузить
                    <input id={`file-uploads${props.id}`} className="file-upload2"  type="file"  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setImageUpload(event.target.files![0])}
                        }/></label>
                    {imageUpload && <h1 className="promotion-file-name">{imageUpload.name}</h1>}
                    {imageUpload && <div className="edit-file-delete" onClick={() => setImageUpload(undefined)}></div>}
            </div>
            <div className='season-item-row'>
                <button className='season-button red' onClick={() => deleteSeason(props.id)}>Удалить</button>
                <button className='season-button green' onClick={updateSeason}>Сохранить</button>
            </div>
        </div>    
    </div>
}

export default SingleSeason