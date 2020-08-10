import React from 'react';
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from "@storybook/addon-knobs"
import BTAgGrid from "./BTAg-grid"

export const stories = storiesOf("BTAgGrid", module);

stories.addDecorator(withKnobs);

stories.add("AG Grid", () => {

    return <BTAgGrid />

}

);

