export interface IDishes {
    id: number,
    name: string,
    description: string,
    price: number,
    discountprice: number,
    weight_big: number,
    weight_small: number,
    calories: number,
    proteins: number,
    fats: number,
    carbos: number,
    ingredient: string,
    image_link: string
}

export interface ISingleDish {
    id: number,
    name: string,
    ingredient: string,
    price: number,
    discountprice: number,
    weight_big: number,
    weight_small: number
}