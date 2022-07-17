import React from 'react';
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import {Accordions} from "./Accordions";
import {Ratings} from "./Ratings";
import {OnOffs} from "./OnOffs";
import {HomeWorks} from "./HomeWorks";
import {Hooks} from "./Hooks";
import {Selectes} from "./Selectes";
import {Clock} from "../components/HW/Clock/Clock";
import {Inputs} from "./Inputs";

export const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/accordions'}/>}/>
                <Route path={'/accordions'} element={<Accordions/>}/>
                <Route path={'/inputs'} element={<Inputs/>}/>
                <Route path={'/ratings'} element={<Ratings/>}/>
                <Route path={'/onoff'} element={<OnOffs/>}/>
                <Route path={'/selectes'} element={<Selectes/>}/>
                <Route path={'/hooks'} element={<Hooks/>}/>
                <Route path={'/hw'} element={<HomeWorks/>}/>
                <Route path={'/hw/clock'} element={<Clock analog={true}/>}/>
                <Route path={'/*'} element={<div>404</div>}/>
            </Routes>
        </div>
    );
};