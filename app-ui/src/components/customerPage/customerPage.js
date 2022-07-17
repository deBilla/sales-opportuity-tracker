import React from 'react';
import DataTable from '../DataTable/dataTable';
import { useQuery } from "react-query";
import axios from "axios";
import ModalButton from '../ModalButton/modalBtn';
import server from '../../config/server';

const CUSTOMER_URL = server() + "/customer/";

export default function CustomerPage() {
    const { isLoading, error, data } = useQuery("repoData", () =>
        axios.get(CUSTOMER_URL + "all"
        ).then((res) => res.data)
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    const handleUpload = (customer) => {
        alert(JSON.stringify(customer));
        createCustomer(customer);
    };

    const createCustomer = customer => {
        axios.post(CUSTOMER_URL, {
            ...customer
        }).then(res => console.log(res)).catch(err => console.log(err));
    }

    const handleStatusChange = (customer, uuid) => {
        alert(JSON.stringify(customer));
        editCustomerStatus(customer, uuid);
    }

    const editCustomerStatus = (customer, uuid) => {
        axios.patch(CUSTOMER_URL + uuid, {
            customer
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