import React, { useState, useEffect } from "react";
import { IDishes } from "../../types/Dishes";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase"
import useUploadImage from "../../hooks/editSingleDish/useUploadImage";
import useEditSingleDish from "../../hooks/editSingleDish/useEditSingleDish";
import IngredientDropdown from "../ui/dropdown/IngredientDropDown";
import { isPropertySignature } from "typescript";
import CategoryElement from "../ui/lists/categotyElement";


interface Dishes {
    dishes: IDishes[]
}

const EditSingleDish:React.FC<Dishes> = ({dishes}) => {
    const {uploadImage, setImageUpload} = useUploadImage()
    const {editSingleDish, handleChangeDish, changeDish} = useEditSingleDish(dishes)

    return <>{editSingleDish && <div className="edit">
        <div className="edit-container">
            <div className="edit-container1">
                <h1 className="edit-label">Цена, р.:</h1>
                <input name="price" className="edit-number" value={editSingleDish!.price} onChange={handleChangeDish}/>
                <div className="edit-image-cont">
                    <img className="edit-picture" src="images/dish-back.png" />
                    <img className="edit-picture-dish" src="https://firebasestorage.googleapis.com/v0/b/test-7978c.appspot.com/o/images%2F%D0%9B%D0%B5%D0%B3%D0%B5%D0%BD%D0%B4%D0%B0%20%D0%9D%D0%BE%D1%80%D0%B2%D0%B5%D0%B3%D0%B8%D0%B8?alt=media&token=43a8af79-f0e4-4757-b352-130871781c44" />
                </div>
                <h1 className="edit-label">Цена со скидкой, р.:</h1>
                <input name="discountprice" className="edit-number" value={editSingleDish!.discountprice} onChange={handleChangeDish}/>
                <h1 className="edit-label">Большая порция, г.:</h1>
                <input name="weight_big" className="edit-number" value={editSingleDish!.weight_big} onChange={handleChangeDish}/>
                <h1 className="edit-label">Маленькая порция, г.:</h1>
                <input name="weight_small" className="edit-number" value={editSingleDish!.weight_small} onChange={handleChangeDish}/>
            </div>
            <div className="edit-container2">
                <h1 className="edit-label">Название:</h1>
                <input name="name" className="edit-description"value={editSingleDish!.name} onChange={handleChangeDish}/>
                <h1 className="edit-label">Описание:</h1>
                <textarea name="description" className="edit-description big" value={editSingleDish!.description} onChange={(event) => handleChangeDish(event)} />
            </div>
            <div className="edit-container3">
                <h1 className="edit-label">Калории:</h1>
                <input name="calories" className="edit-number" value={editSingleDish!.calories} onChange={handleChangeDish}/>
                <h1 className="edit-label">Белки, г.:</h1>
                <input name="proteins" className="edit-number" value={editSingleDish!.proteins} onChange={handleChangeDish}/>
                <h1 className="edit-label">Жиры, г.:</h1>
                <input name="fats" className="edit-number" value={editSingleDish!.fats} onChange={handleChangeDish}/>
                <h1 className="edit-label">Углеводы, г.:</h1>
                <input name="carbos" className="edit-number" value={editSingleDish!.carbos} onChange={handleChangeDish}/>
            </div>
            <div className="edit-container4">
                <h1 className="edit-label">Ингредиент:</h1>
                <IngredientDropdown ingredient={editSingleDish!.ingredient} changeDish={changeDish}/>
                <h1 className="edit-label">Категория:</h1>
                <div className="edit-category-row">
                    <CategoryElement id={editSingleDish!.id}/>

                </div>
                <h1 className="edit-label">Изображение:</h1>
                <label htmlFor="file-upload" className="edit-upload">Загрузить
                <input id="file-upload"  type="file"  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setImageUpload(event.target.files![0])}
                    }/></label>
            </div>
        </div>
        <div className="edit-container5">
            <button className="edit-button red">Удалить</button>
            <button className="edit-button green" onClick={() => uploadImage(editSingleDish!.name)}>Сохранить</button>
        </div>
    </div>}</>
}

export default EditSingleDish