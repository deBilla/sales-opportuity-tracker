import React from 'react';
import DataTable from '../DataTable/dataTable';
import { useQuery } from "react-query";
import axios from "axios";
import ModalButton from '../ModalButton/modalBtn';
import server from '../../config/server';

export default function CustomerPage() {
    const { isLoading, error, data } = useQuery("repoData", () =>
        axios.get(server() + "/customers"
        ).then((res) => res.data)
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    const handleUpload = (data) => {
        alert(JSON.stringify(data));
        createCustomer(data);
    };

    const createCustomer = data => {
        axios.post(server() + '/customer', {
            ...data
        }).then(res => console.log(res)).catch(err => console.log(err));
    }

    const handleStatusChange = (data, uuid) => {
        alert(JSON.stringify(data));
        editCustomerStatus(data, uuid);
    }

    const editCustomerStatus = (data, uuid) => {
        axios.patch(server() + '/customer/' + uuid, {
            data
        }).then(res => console.log(res)).catch(err => console.log(err));
    }

    const transformed = data.map(s => {
        return {
            btn: <ModalButton data={s} handleUpload={handleUpload} handleStatusChange={handleStatusChange} />,
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
        <>
            <ModalButton btnName={'Add'} handleUpload={handleUpload} handleStatusChange={handleStatusChange} />
            <DataTable rowData={transformed} />
        </>
    );
}