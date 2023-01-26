import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { ISingleDish } from '../../types/Dishes'
import useGetBoxCategories from '../../hooks/API/categoties/useGetBoxesCategories'
import { IBoxCategories } from '../../hooks/API/categoties/useGetBoxesCategories'


const SingleDish:React.FC<ISingleDish> = (props) => {
    const {boxCategories} = useGetBoxCategories(props.id)
    
    const getCatColor = () => {
        if (props.ingredient === "Рыба") {
            return 'dish-ingredient green'
        }
        else if (props.ingredient === "Свинина") {
            return 'dish-ingredient red'
        }
        return 'dish-ingredient yellow'
    }

    const cutString = (name:string) => {
        if (name.length < 18) return name
        else return name.slice(0, 18)+ "..."
    }

    const renderedCategories = boxCategories.slice(0, 2).map((item:IBoxCategories) => {
        return <div className='dish-category' key={item.name}>{cutString(item.name)}</div>
    })

    return <div className={props.isSelected ? 'dish grey' : 'dish white'} onClick={() => props.selectDish(props.id)}>
                <div className="dish-img-cont"></div>
                
                <div className='row3'>
                    <div>
                        <div className='row4'>
                            <h1 className='dish-header'>{props.name}</h1>
                            {props.ingredient !== "" && <h1 className={getCatColor()}>{props.ingredient !== "Не выбрано" && props.ingredient}</h1>}
                        </div>
                        <div className='cat-row'>{renderedCategories}</div>
                    </div>
                    <div className='row4'>
                        <h1 className='dish-weight'>{props.weight_small !== 0 && `${props.weight_small} г / `} {props.weight_big} г</h1>
                        <h1 className='dish-price'>{props.price} р{props.discountprice !==0 && ` / ${props.discountprice} р`}</h1>
                    </div>   
                </div>
            </div>
}

export default SingleDish