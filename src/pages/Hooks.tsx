import React from 'react';
import {UseMemoUseCallback} from "../components/Hooks/Memo/UseMemoUseCallback";
import {DetailUseState} from "../components/Hooks/UseState/DetailUseState";
import {UseEffectClock} from "../components/HW/useEffectClock/UseEffectClock";
import {Memo} from "../components/Hooks/Memo/Memo";

export const Hooks = () => {
    return (
        <div>
            <UseMemoUseCallback/>
            <DetailUseState/>
            <Memo/>
            <UseEffectClock/>
        </div>
    );
};