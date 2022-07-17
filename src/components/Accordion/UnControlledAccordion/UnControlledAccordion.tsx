import React, {useReducer} from "react";
import s from './UnControlledAccordion.module.css'
import {reducer} from "./reducer";

export type UnControlledAccordionPropsType = {
    titleValue: string
    defaultMode?: boolean
}

export type StateType = {
    collapsed: boolean
}

export function UnControlledAccordion(props: UnControlledAccordionPropsType ) {

    const state = {
        collapsed: false
    }

    const [accordionMode, dispatch] = useReducer(reducer, state)

    return (
        <div className={s.accordion}>
            <UnControlledAccordionTitle
                title={props.titleValue}
                callBack={ () => dispatch({type: "TOGGLE-COLLAPSED"}) }
                collapsed={accordionMode.collapsed}/>
            {!accordionMode.collapsed && <UnControlledAccordionBody/>}
        </div>
    )
}

type UnControlledAccordionTitlePropsType = {
    title: string
    collapsed: boolean
    callBack: () => void
}

function UnControlledAccordionTitle(props: UnControlledAccordionTitlePropsType) {
    return <h3 onClick={props.callBack}>{props.title}</h3>
}

function UnControlledAccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}