import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import { AllCommunityModules } from '@ag-grid-community/all-modules';
// import 'ag-grid-enterprise';
import { Button } from '@material-ui/core';

import BTButton from '../components/atoms/BTButton/BTButton'
import DoneIcon from '@material-ui/icons/Done';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // modules: AllCommunityModules,
            columnDefs: [{
                headerName: "Name", field: "name", sortable: true, filter: true, checkboxSelection: true
            },
            {
                headerName: "Author", field: "author", sortable: true, filter: true, headerComponentParams: { menuIcon: 'DoneIcon' },
            },
            {
                headerName: "Price", field: "price", sortable: true, filter: true, cellRenderer: 'DoneIcon',
            }],
            frameworkComponents: {
                DoneIcon: DoneIcon,
                // BTButton : BTButton 
            },
            // rowData: [
            //     { name: "A Passage to India", author: "E.M. Forster", price: 2100 },
            //     { name: "Invisible Man", author: "Ralph Ellison", price: 1612 },
            //     { name: "Beloved", author: "Toni Morrison", price: 999 },
            //     { name: "Mrs. Dalloway", author: "Virginia Woolf", price: 1599 },
            //     { name: "The Color Purple", author: "Oprah Winfrey", price: 1899 },
            //     { name: "Game of thrones", author: "George R. R. Martin", price: 2999 },
            //     { name: "To Kill a Mockingbird", author: "Harper Lee", price: 2100 },
            // ]
        }
    }

    componentDidMount() {
        fetch('http://localhost:4000/rowData')
            .then(result => result.json())
            .then(rowData => this.setState({ rowData }))

        // this.gridApi.forEachNode(function (rowNode) {
        //     if (rowNode.data.value  === 2100) {
        //         rowNode.setDataValue(
        //             'price',
        //             'DoneIcon',
        //         );
        //     }
        // });
        // this.gridApi.refreshCells({ columns: ['currency'] });

    }

    handleClick = () => {
        const selectedNodes = this.gridApi.getSelectedNodes();
        const selectedData = selectedNodes.map(node => node.data)
        const selectedString = selectedData.map(node => node.name + ' , ' + node.author + ' , ' + node.price).join('\n');
        alert(`selected Data: \n${selectedString}`)
    }

    render() {
        return (
            <div
                className="ag-theme-alpine"
                style={{
                    height: '25rem',
                    width: '40rem'
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
                <br /><br />
                <Button variant="contained" color="primary" onClick={this.handleClick} >Get Selected Rows</Button>
            </div>
        );
    }
}

export default Grid;