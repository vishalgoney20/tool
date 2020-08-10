import React from 'react';
import './App.css';
// import Enable from './screens/enable'
import Grid from './screens/grid'
import BTAgGrid from './components/organisms/BTAg-grid/BTAg-grid'
import DoneIcon from './components/organisms/DoneIcon/DoneIcon'

function App() {
  // const [open, setOpen] = React.useState(true);

  return (
    <div >
      <BTAgGrid />
      <br /> <br />
      {/* <DoneIcon open={open} /> */}
    </div>
  );
}

export default App;
