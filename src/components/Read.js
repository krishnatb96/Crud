import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";

const Read = () => {
    const [apiData, setApiData] = useState([]);

    const getApiData = () => {
        axios.get('https://6471a2ab6a9370d5a41a7e71.mockapi.io/ops')
            .then((res) => {
                setApiData(res.data);
            })
    }

    useEffect(() => {
        getApiData();
    }, [])

    const handleDelete = (id) => {
        axios.delete(`https://6471a2ab6a9370d5a41a7e71.mockapi.io/ops/${id}`).then(() => {
            getApiData();
        })
    }

    const setToLocaleStore = (id, firstName, lastName) => {
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("id", id);
    }

    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {apiData.map((e) => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.firstName}</td>
                            <td>{e.lastName}</td>
                            <td>
                                <Link to="/Update">
                                    <Button
                                        className="btn btn-primary mx-2"
                                        onClick={() => setToLocaleStore(e.id, e.firstName, e.lastName)}
                                    >
                                        Edit
                                    </Button>
                                </Link>
                                <Button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(e.id)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Read;
