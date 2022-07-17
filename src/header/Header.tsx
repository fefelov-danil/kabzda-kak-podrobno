import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.links}>
                <NavLink to={'/accordions'}>Accordion</NavLink>
                <NavLink to={'/inputs'}>Inputs</NavLink>
                <NavLink to={'/ratings'}>Rating</NavLink>
                <NavLink to={'/onoff'}>OnOffs</NavLink>
                <NavLink to={'/selectes'}>Selectes</NavLink>
                <NavLink to={'/hooks'}>Hooks</NavLink>
                <NavLink to={'/hw'}>HomeWorks</NavLink>
            </div>

        </div>
    );
};