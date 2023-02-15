import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HeaderSwitch from "./side-menu/HeaderSwitch";
import MenuEditor from "./menu-editor/MenuEditor";
import Seasons from "./seasons/Seasons";
import Promotions from "./promotions/Promotions";
import DishesContextProvider from "../context/dishesContext";
import ActiveDishContextProvider from "../context/activeDishContext";
import PromotionsContextProvider from "../context/promotionsContext";


const Main:React.FC = () => {

    return (
        <PromotionsContextProvider>
        <ActiveDishContextProvider >   
            <DishesContextProvider>
                <HeaderSwitch />
                <Routes>
                    {!localStorage.getItem('vaffel_token') && <Route path="/" element={<Navigate to="login"/>}/>}
                    
                    <Route path="/" element={<Navigate to="menu"/>}/>
                    <Route path="menu" element={<MenuEditor />}/>
                    <Route path="seasons" element={<Seasons />} />
                    <Route path="promotions" element={<Promotions />} />
                    <Route path='*' element={<div>Oops! Page not found</div>} />
                </Routes>
            </DishesContextProvider>
        </ActiveDishContextProvider>
        </PromotionsContextProvider>
    )
}

export default Main