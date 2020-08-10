import React, { Component } from 'react';
import DoneIcon from '@material-ui/icons/Done';

export default class ChildMessageRenderer extends Component {
    constructor(props) {
        super(props);
        this.checked = true;
        // this.node.alreadyRendered = false;
        this.checkPermission = this.checkPermission.bind(this);
    }

    checkPermission() {
        // if(this.props)

        // alert(`hello , ${this.props.node.rowIndex} `)
        console.log(this.props.node.data.Can_invite_collaborators)
        // alert(` ${this.props.node}`)
    }

    render() {
        return (
            <div>
                {this.checked === true ? <DoneIcon onClick={this.checkPermission} /> : ""}
            </div>
        );
    }
}













// import React, { Component } from 'react';
// import DoneIcon from '@material-ui/icons/Done';


// function App(props) {
//     const [open, setOpen] = React.useState(props.open);

//     return (
//         <div>
//             {open === true ? <DoneIcon /> : ""}
//         </div>
//     );
// }

// export default App;
