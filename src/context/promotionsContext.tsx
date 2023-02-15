import {useContext, createContext} from 'react'
import usePromotions from '../hooks/API/promotions/usePromotions'
import { IPromotion } from '../types/Promotions'

interface IPromContext {
    promotions: IPromotion[],
    getAllPromotions: Function
}

export const PromotionsContext = createContext<IPromContext>(null!)

const PromotionsContextProvider:React.FC<React.PropsWithChildren> = ({children}) => {
    const {promotions, getAllPromotions} = usePromotions()

    const value:IPromContext = {
        promotions,
        getAllPromotions
    }

    return <PromotionsContext.Provider value={value}> {children}</PromotionsContext.Provider>
}

export default PromotionsContextProvider