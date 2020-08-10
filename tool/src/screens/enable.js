import React from 'react';
import BTButton from '../components/atoms/BTButton/BTButton'
import BTDialog from '../components/organisms/BTDialog/BTDialog'

function Enable() {

    const [open, setOpen] = React.useState(false);

    return (
        <div className="App">
            <BTButton value="Enable Access" onClick={() => { setOpen(true) }} />

            <br></br><br></br>

            <BTDialog open={open} onClose={() => { setOpen(false) }} />
        </div>
    );
}

export default Enable;
