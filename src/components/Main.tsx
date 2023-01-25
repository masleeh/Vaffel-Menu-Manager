import React, { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import HeaderSwitch from "./side-menu/HeaderSwitch";
import MenuEditor from "./menu-editor/MenuEditor";
import Seasons from "./seasons/Seasons";
import Promotions from "./promotions/Promotions";
import DishesContextProvider from "../context/dishesContext";


const Main:React.FC = () => {
    

    return (
        <DishesContextProvider>
            <HeaderSwitch />
            <Routes>
                <Route path="menu" element={<MenuEditor />}/>
                <Route path="seasons" element={<Seasons />} />
                <Route path="promotions" element={<Promotions />} />
                <Route path='*' element={<div>Oops! Page not found</div>} />
            </Routes>
        </DishesContextProvider>
    )
}

export default Main