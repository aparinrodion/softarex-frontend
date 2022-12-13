import React, {useEffect, useState} from 'react';
import NavigationBar from "./NavigationBar";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator"
import {FiEdit, FiTrash} from "react-icons/fi";
import {Button, Modal} from "react-bootstrap";
import {MDBDropdown, MDBInput} from "mdb-react-ui-kit";
import {useParams} from "react-router-dom";
import axios from "axios";

const Fields = () => {
    const [modalShow, setModalShow] = useState(false);
    const [clickedRow, setClickedRow] = useState("");
    const [fields, setFields] = useState([]);
    const params = useParams();

    function EditFieldModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.title}
                    </Modal.Title>
                </Modal.Header>
                <label>Label:</label>
                <MDBInput value={props.data.label}></MDBInput>
                <MDBDropdown value={props.data.type}></MDBDropdown>
                <Modal.Body>
                    {props.data.id}
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-light" onClick={props.onHide}>Cancel</Button>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    const buttons = (cell, row, rowIndex, formatExtraData) => {
        return (<div>
            <FiEdit onClick={() => {
                setClickedRow(row)
                setModalShow(true);
            }}/>
            <FiTrash/>
        </div>)
    }

    function loadFields() {
        axios.get("http://localhost:8080/questionnaires/" + params.id, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(response => {
            setFields(response.data)
        })
    }

    useEffect(() => {
        loadFields()
    }, [])

    const columns = [{
        dataField: 'label',
        text: 'Label',
    }, {
        dataField: 'type',
        text: 'Type'
    }, {
        dataField: 'required',
        text: 'Required'
    }, {
        dataField: 'active',
        text: 'Is Active',
    }, {
        formatter: buttons
    }
    ];

    return (
        <div>
            <NavigationBar name={'test'}/>
            <div className='w-50'>
                <BootstrapTable keyField={'id'} data={fields} columns={columns}
                                pagination={paginationFactory({
                                    sizePerPage: 3,
                                    hideSizePerPage: true,
                                    withFirstAndLast: false,
                                    alwaysShowAllBtns: true,
                                    showTotal: true,
                                    hidePageListOnlyOnePage: true
                                })}/>
            </div>
            <EditFieldModal
                title={'Edit'}
                show={modalShow}
                onHide={() => setModalShow(false)}
                data={clickedRow}
            />

        </div>
    );
};

export default Fields;