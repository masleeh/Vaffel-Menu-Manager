import React, {useContext} from "react";
import useGetBoxCategories from "../../../hooks/API/categoties/useGetBoxesCategories";
import CategoryDropDown from "../dropdown/CategoryDropdown";
import useGetCategories from "../../../hooks/API/categoties/useGetCategries";
import { IBoxCategories } from "../../../hooks/API/categoties/useGetBoxesCategories";
import { DishesContext } from "../../../context/dishesContext";
import axios from "axios";


interface ICatElem {
    id: number,
    name?: string,
    isSelected?: boolean
}

const CategoryElement:React.FC<ICatElem> = (props) => {
    const {boxCategories, getCategories} = useGetBoxCategories(props.id)
    const {categories} = useGetCategories()

    const {getAllDishes} = useContext(DishesContext)
    
    const filteredCategories = categories.filter(item => {
        if (boxCategories.find(element => element.name === item.name)) return false
        return true
    })

    const deleteCategory = async (item:IBoxCategories) => {
        const token = localStorage.getItem('vaffel_token')
        const reqCategody = {
            dish_id: props.id,
            category_id: item.category_id
        }
        const response = await axios.patch('http://localhost:5000/api/v1/categories', reqCategody, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        await getCategories()
        await getAllDishes()
    }

    const addCategory = async (item:ICatElem) => {
        const token = localStorage.getItem('vaffel_token')
        const reqCategody = {
            dish_id: props.id,
            category_id: item.id
        }
        const response = await axios.post('http://localhost:5000/api/v1/categories', reqCategody, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        await getCategories()
        await getAllDishes()
    }

    const cutString = (name:string) => {
        if (name.length < 18) return name
        else return name.slice(0, 18)+ "..."
    }

    const renderedCategories = boxCategories.map(item => {
        return <div className="categ" key={item.name}>
                    <div className="categ-label">{cutString(item.name)}</div>
                    <img src="./images/delete-icon.svg" onClick={() => deleteCategory(item)} className="categ-image"/>
                </div>
    })

    return (<>
    {renderedCategories}
    {categories && <CategoryDropDown filteredCategories={filteredCategories} addCategory={addCategory}/>}
    </>)
}

export default CategoryElement