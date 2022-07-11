import {StateType} from "./UnControlledAccordion";

export type ActionType = {
    type: "TOGGLE-COLLAPSED"
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case "TOGGLE-COLLAPSED":
            return {...state, collapsed: !state.collapsed}
        default:
            return state
    }
}