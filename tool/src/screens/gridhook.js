import React, { useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import { AllCommunityModules } from '@ag-grid-community/all-modules';
// import 'ag-grid-enterprise';
import { Button } from '@material-ui/core';

import BTButton from '../components/atoms/BTButton/BTButton'
import DoneIcon from '@material-ui/icons/Done';


function Gridhook() {
    const [rowData, setRowData] = React.useState([]);
    const [columnDefs, setColumnDefs] = React.useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/rowData')
            .then(result => result.json())
            .then(rowData => setRowData({ rowData }))

        setColumnDefs(
            [{
                headerName: "Name", field: "name", sortable: true, filter: true, checkboxSelection: true
            },
            {
                headerName: "Author", field: "author", sortable: true, filter: true, headerComponentParams: { menuIcon: 'fa-external-link-alt' },
            },
            {
                headerName: "Price", field: "price", sortable: true, filter: true, cellRenderer: 'DoneIcon',
            }]
        );

    })

    return (
        <div
            className="ag-theme-alpine"
            style={{
                height: '25rem',
                width: '40rem'
            }}
        >
            <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData}
                rowSelection="multiple"
                onGridReady={params => this.gridApi = params.api}
                // frameworkComponents={this.state.frameworkComponents}
            >
            </AgGridReact>
            <br /><br />
            {/* <Button variant="contained" color="primary" onClick={this.handleClick} >Get Selected Rows</Button> */}
        </div>
    );
}

export default Gridhook