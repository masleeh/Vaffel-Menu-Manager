import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { ISingleDish } from '../../types/Dishes'


const SingleDish:React.FC<ISingleDish> = (props) => {
    const [singleCategories, setSingleCategory] = useState([])
    
    const getCategories = async () => {
        const token = localStorage.getItem('vaffel_token')
        const categories = await axios.get(`http://localhost:5000/api/v1/categories/${props.id}`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        setSingleCategory(categories.data)
    }
    
    useEffect( () => {
        getCategories()
    },[])
    
    const getCatColor = () => {
        if (props.ingredient === "Рыба") {
            return 'dish-ingredient green'
        }
        else if (props.ingredient === "Свинина") {
            return 'dish-ingredient red'
        }
        return 'dish-ingredient yellow'
    }

    const renderedCategories = singleCategories.slice(0, 2).map(item => {
        return <div className='dish-category' key={item}>{item}</div>
    })

    return <div className={props.isSelected ? 'dish grey' : 'dish white'} onClick={() => props.selectDish(props.id)}>
                <div className="dish-img-cont"></div>
                
                <div className='row3'>
                    <div>
                        <div className='row4'>
                            <h1 className='dish-header'>{props.name}</h1>
                            {props.ingredient !== "" && <h1 className={getCatColor()}>{props.ingredient}</h1>}
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