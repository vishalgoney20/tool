import React from 'react';
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from "@storybook/addon-knobs"
import BTButton from '../BTButton/BTButton'

export const stories = storiesOf("BTButton", module);
stories.addDecorator(withKnobs);

stories.add("Button", () => {

  const name = text("name", "Enable Access");

  return <BTButton value={name} onClick={action('click')}> </BTButton>
}
);

