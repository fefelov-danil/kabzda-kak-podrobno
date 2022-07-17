import React, {useState} from 'react';
import {Accordion} from "../components/Accordion/Accordion";
import {UnControlledAccordion} from "../components/Accordion/UnControlledAccordion/UnControlledAccordion";
import {v1} from "uuid";

export const Accordions = () => {
    const [accordionControlled, setAccordionControlled] = useState<boolean>(false)
    const items = [
        {id: v1(), title: "first", value: 1},
        {id: v1(), title: "second", value: 2},
        {id: v1(), title: "third", value: 3},
    ]

    const onClickItem = (value: any) => { }

    return (
        <div>
            <Accordion
                titleValue={"Menu1"}
                accordionControlled={accordionControlled}
                changeCollapsed={() => setAccordionControlled(!accordionControlled)}
                items={items}
                onClick={onClickItem}/>
            <UnControlledAccordion titleValue={"Menu2"}/>
        </div>
    );
};