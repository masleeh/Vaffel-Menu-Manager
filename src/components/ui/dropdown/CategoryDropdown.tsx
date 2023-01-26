import React, {useState} from "react";
import { ICategories } from "../../../hooks/API/categoties/useGetCategries";

interface FilteredCategories {
    filteredCategories: ICategories[],
    addCategory: Function
}

const CategoryDropDown:React.FC<FilteredCategories> = (props) => {
    const [isShown, setIsShown] = useState(false)

    const categoriesItems = props.filteredCategories.map(item => {
        if (item.name === "Все позиции") return
        return <div key={item.name} className="categdrop-item" onClick={() => {
            setIsShown(false)
            props.addCategory(item)
        }}>{item.name}</div>
    })

    return <div className="categdrop">
                <div className="categdrop-btn" onClick={() => setIsShown(!isShown)}>+</div>
                {isShown && <div className="categdrop-content">
                    {categoriesItems}
                </div>}
    </div>
}

export default CategoryDropDown