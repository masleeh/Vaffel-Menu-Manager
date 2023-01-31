import React, {useState, createContext, PropsWithChildren} from 'react'

interface ActiveDish {
    activeDishId: number,
    setActiveDishId: Function,
}

export const ActiveDishContext = createContext<ActiveDish>(null!)

const ActiveDishContextProvider:React.FC<PropsWithChildren> = ({children}) => {
    const [activeDishId, setActiveDishId] = useState<number>(0)

    const value:ActiveDish = {
        activeDishId,
        setActiveDishId
    }

    return (
        <ActiveDishContext.Provider value={value}> {children} </ActiveDishContext.Provider> 
    )
}

export default ActiveDishContextProvider