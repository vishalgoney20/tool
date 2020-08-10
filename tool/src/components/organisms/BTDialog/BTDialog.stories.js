import React from 'react';
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from "@storybook/addon-knobs"
import BTDialog from './BTDialog'


export const stories = storiesOf("BTDialog", module);

stories.addDecorator(withKnobs);

stories.add("Dialog", () => {

    const clicked=boolean("selected",true);

    return <BTDialog
        open={clicked}
        onClose={action('closed')} />

}

);

