import React from 'react';
import {v1} from "uuid";
import {SelectCustom} from "../../SelectCustom/SelectCustom";

type CitiesType = {
    id: string
    country: string
    citi: string
    population: number
}

export const SelectCities = () => {

    const cities: CitiesType[] = [
        {id: v1(), country: "Russia", citi: "Moscow", population: 12635},
        {id: v1(), country: "Russia", citi: "Saint Petersburg", population: 5378},
        {id: v1(), country: "Russia", citi: "Kazan", population: 1259},
        {id: v1(), country: "Russia", citi: "Yekaterinburg", population: 1494},
        {id: v1(), country: "Belarus", citi: "Minsk", population: 1938},
        {id: v1(), country: "Belarus", citi: "Gomel", population: 516},
        {id: v1(), country: "Belarus", citi: "Mogilev", population: 374},
        {id: v1(), country: "Ukraine", citi: "Kyiv", population: 2888},
        {id: v1(), country: "Ukraine", citi: "Kharkiv", population: 1444},
        {id: v1(), country: "Ukraine", citi: "Odessa", population: 1010},
        {id: v1(), country: "USA", citi: "NY", population: 8491},
        {id: v1(), country: "USA", citi: "Los Angeles", population: 3928},
        {id: v1(), country: "USA", citi: "Chicago", population: 2722},
        {id: v1(), country: "USA", citi: "Memphis", population: 656},
    ]

    const createCitiesArr = (cities: CitiesType[]) => {
        return cities.map(c => {
            return {id: c.id, value: `${c.citi}, ${c.population} тыс.чел`}
        })
    }

    const citiesBelarus = createCitiesArr(cities.filter(c => c.country === "Belarus"))
    const citiesM = createCitiesArr(cities.filter(c => c.citi[0] === "M"))
    const citiesMore3million = createCitiesArr(cities.filter(c => c.population >= 3000))

    return (
        <div>
            <SelectCustom items={citiesBelarus}/>
            <SelectCustom items={citiesM}/>
            <SelectCustom items={citiesMore3million}/>
        </div>
    );
};

