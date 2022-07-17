import React, {useState} from 'react';
import {OnOff} from "../components/OnOff/OnOff";
import {UnControlledOnOff} from "../components/OnOff/UnControlledOnOff/UnControlledOnOff";

export const OnOffs = () => {
    const [switchOn, setSwitchOn] = useState<boolean>(false)
    const switchOnHandler = () => {
        setSwitchOn(!switchOn)
    }

    return (
        <div>
            <OnOff
                switchOn={switchOn}
                setSwitchOn={switchOnHandler}/>
            <UnControlledOnOff/>
        </div>
    );
};