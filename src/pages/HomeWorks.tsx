import React from 'react';
import s from '../styles/Container.module.css'
import {NavLink} from "react-router-dom";

export const HomeWorks = () => {
    return (
        <div className={s.container}>
            <NavLink to={'/hw/clock'} className={s.link}>Clock</NavLink>
        </div>
    );
};