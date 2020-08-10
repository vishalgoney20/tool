import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import { AllCommunityModules } from '@ag-grid-community/all-modules';
// import 'ag-grid-enterprise';
import { Button } from '@material-ui/core';

import DoneIcon from '../DoneIcon/DoneIcon'

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

class BTAgGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frameworkComponents: {
                DoneIcon: DoneIcon,
                CheckBoxOutlineBlankIcon: CheckBoxOutlineBlankIcon
            },
        }
    }

    componentDidMount() {
        fetch('http://localhost:4000/rowData')
            .then(result => result.json())
            .then(rowData => this.setState({ rowData }))

        fetch('http://localhost:4000/columnDefs')
            .then(result => result.json())
            .then(columnDefs => this.setState({ columnDefs }))

    }

    // handleClick = () => {
    //     const selectedNodes = this.gridApi.getSelectedNodes();
    //     const selectedData = selectedNodes.map(node => node.data)
    //     const selectedString = selectedData.map(node => node.name + ' , ' + node.author + ' , ' + node.price).join('\n');
    //     alert(`selected Data: \n${selectedString}`)
    // }

    render() {
        return (
            <div
                className="ag-theme-alpine"
                style={{
                    height: '20rem',
                    width: '75%'
                }}
            >
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}
                    rowSelection="multiple"
                    onGridReady={params => this.gridApi = params.api}
                    frameworkComponents={this.state.frameworkComponents}
                >
                </AgGridReact>
            </div>
        );
    }
}

export default BTAgGrid;