import React from 'react';
import {SelectCustom} from "../components/SelectCustom/SelectCustom";
import {v1} from "uuid";
import {SelectCities} from "../components/HW/select-cities/Select-cities";
import {SelectStandard} from "../components/SelectStandard/SelectStandard";

export const Selectes = () => {
    const selectStandartItems = [
        {item: "Krasnoyarsk", value: "1"},
        {item: "Moscow", value: "2"},
        {item: "Spb", value: "3"}
    ]

    const selectItems = [
        {id: v1(), value: "1"},
        {id: v1(), value: "2"},
        {id: v1(), value: "3"},
        {id: v1(), value: "4"},
        {id: v1(), value: "5"},
    ]

    return (
        <div>
            <SelectStandard value={"Krasnoyarsk"} items={selectStandartItems} />
            <SelectCustom
                selectedItem={4}
                items={selectItems}/>
            <SelectCities/>
        </div>
    );
};