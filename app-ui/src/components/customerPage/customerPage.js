import React, { useState } from 'react';
import DataTable from '../DataTable/dataTable';
import { useQuery } from "react-query";
import axios from "axios";
import ModalButton from '../ModalButton/modalBtn';

export default function CustomerPage() {
    const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
        axios.get(
            "http://localhost:3000/customers"
        ).then((res) => res.data)
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    const transformed = data.map(s => {
        return {
            btn: <ModalButton data={s} />,
            name: s.firstName + ' ' + s.lastName,
            mobile: s.phoneNumber,
            address: s.addressLine1 + ', ' + s.addressLine2,
            city: s.city,
            state: s.state,
            country: s.country,
            status: s.status
        }
    })

    return (
        <DataTable rowData={transformed} />
    );
}