import React from "react";

const SinglePromotion:React.FC = () => {

    return <div className="promotion">
            <div className="promotion-img-cont">
                <img className="promotion-image" />
                <div className="promotion-block">
                </div>
                <div className="promotion-abs-block">
                    <h1 className="promotion-title">Игривый четверг</h1>
                    <h1 className="promotion-description">1+1 на ВСЕ шампанское <br /> 2 бокала по цене 1</h1>
                </div>
            </div>
            <h1 className="promotion-label">Название акции:</h1>
            <input className="promotion-input" />
            <div className="promotion-label">Описание акции:</div>
            <textarea className="promotion-textarea" />
            <div className="promotion-label">Изображение:</div>
            <button className="promotion-upload">Загрузить</button>
            <div className="row">
                <button className="promotion-button red">Удалить</button>
                <button className="promotion-button green">Сохранить</button>
            </div>


        </div>
}

export default SinglePromotion