import React, {useState} from "react";
import { ICategories } from "../../../hooks/API/categoties/useGetCategries";
import useDisableSelect from "../../../hooks/helpers/useDisableSelect";

interface FilteredCategories {
    filteredCategories: ICategories[],
    addCategory: Function
}

const CategoryDropDown:React.FC<FilteredCategories> = (props) => {
    const [isShown, setIsShown] = useState(false)
    const {selectRef} = useDisableSelect(isShown, setIsShown)

    const categoriesItems = props.filteredCategories.map(item => {
        if (item.name === "Все позиции") return
        return <div key={item.name} className="categdrop-item" onClick={() => {
            setIsShown(false)
            props.addCategory(item)
        }}>{item.name}</div>
    })

    return <div className="categdrop" ref={selectRef}>
                <div className="categdrop-btn" onClick={() => setIsShown(!isShown)}>+</div>
                {isShown && <div className="categdrop-content">
                    {categoriesItems}
                </div>}
    </div>
}

export default CategoryDropDown