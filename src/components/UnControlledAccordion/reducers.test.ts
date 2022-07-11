import {StateType} from "./UnControlledAccordion";
import {reducer} from "./reducer";

let state: StateType
beforeEach(() => {
    state = {
        collapsed: false
    }
})

test("Change the state of the unControlledAccordion to the opposite", () => {
    const result = reducer(state, {type: "TOGGLE-COLLAPSED"})

    expect(result.collapsed).toBe(true)
})