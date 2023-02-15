import React from "react";
import { IPromotion } from "../../types/Promotions";
import useEditPromotions from "../../hooks/API/promotions/useEditPromotions";
import useDeletePromotion from "../../hooks/API/promotions/useDeletePromotion";

const SinglePromotion:React.FC<IPromotion> = (props) => {
    const {handleChange, promotion, resetPromotion, imageUpload, setImageUpload, updatePromotion} = useEditPromotions({
        id: props.id,
        title: props.title,
        description: props.description,
        image_link: props.image_link
    })

    const {deletePromotion} = useDeletePromotion()


    return <div className="promotion">
            <div className="promotion-img-cont">
                <img className="promotion-image" src={promotion.image_link} alt="Promotion Image"/>
                {/* <div className="promotion-abs-block">
                </div> */}
                <div className="promotion-block">
                    <h1 className="promotion-title">{promotion.title}</h1>
                    <h1 className="promotion-description">{promotion.description}</h1>
                </div>
            </div>
            <h1 className="promotion-label">Название акции:</h1>
            <input name="title" className="promotion-input" value={promotion.title} onChange={handleChange}/>
            <div className="promotion-label">Описание акции:</div>
            <textarea name="description" className="promotion-textarea" value={promotion.description} onChange={handleChange}/>
            <div className="promotion-label">Изображение:</div>
            <div className="edit-file-row">
                    <label htmlFor="file-upload2" className="promotion-upload">Загрузить
                    <input id="file-upload2"  type="file"  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setImageUpload(event.target.files![0])}
                        }/></label>
                    {imageUpload && <h1 className="promotion-file-name">{imageUpload.name}</h1>}
                    {imageUpload && <div className="edit-file-delete" onClick={() => setImageUpload(undefined)}></div>}
                </div>
            {/* <button className="promotion-upload">Загрузить</button> */}
            <div className="row">
                <button className="promotion-button yellow" onClick={resetPromotion}>Отменить</button>
                <button className="promotion-button red" onClick={() => deletePromotion(promotion.id)}>Удалить</button>
                <button className="promotion-button green" onClick={async () => {
                    await updatePromotion()
                    props.getAllPromotions!()
                }}>Сохранить</button>
            </div>


        </div>
}

export default SinglePromotion