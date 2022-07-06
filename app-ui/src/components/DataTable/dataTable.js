import React from 'react';
import { MDBDataTable } from 'mdbreact';

export default function DataTable({ rowData }) {
    const data = {
        columns: [
            {
                label: '',
                field: 'btn',
                width: 5
            },
            {
                label: 'Name',
                field: 'name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Phone Number',
                field: 'mobile',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Address',
                field: 'address',
                sort: 'asc',
                width: 200
            },
            {
                label: 'City',
                field: 'city',
                sort: 'asc',
                width: 100
            },
            {
                label: 'State',
                field: 'state',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Country',
                field: 'country',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Status',
                field: 'status',
                sort: 'asc',
                width: 100
            }
        ],
        rows: rowData
    };

    return (
        <MDBDataTable
            striped
            bordered
            noBottomColumns
            small data={data}
        />
    );
}