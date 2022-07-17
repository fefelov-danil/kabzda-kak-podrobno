import React from "react";
import {UnControlledRating, UnControlledRatingPropsType} from "./UnControlledRating";
import {Story} from "@storybook/react";

export default {
    title: 'UnControlledRating',
    component: UnControlledRating,
}

const Template: Story<UnControlledRatingPropsType> = (args) => <UnControlledRating {...args} />

export const Rating1 = Template.bind({})
Rating1.args = {
    defaultRating: 1
}

export const Rating2 = Template.bind({})
Rating2.args = {
    defaultRating: 2
}

export const Rating3 = Template.bind({})
Rating3.args = {
    defaultRating: 3
}

export const Rating4 = Template.bind({})
Rating4.args = {
    defaultRating: 4
}

export const Rating5 = Template.bind({})
Rating5.args = {
    defaultRating: 5
}