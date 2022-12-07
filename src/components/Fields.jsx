import React, {useState} from 'react';
import NavigationBar from "./NavigationBar";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator"
import {FiEdit, FiTrash} from "react-icons/fi";
import {Button, Modal} from "react-bootstrap";

const Fields = () => {
    const [modalShow, setModalShow] = useState(false);
    const [clickedRow, setClickedRow] = useState("");

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
                        Edit Field
                    </Modal.Title>
                </Modal.Header>
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

    const columns = [{
        dataField: 'id',
        text: 'Product ID',
    }, {
        dataField: 'name',
        text: 'Product Name'
    }, {
        dataField: 'price',
        text: 'Product Price'
    }, {
        dataField: 'buttons',
        text: 'test',
        formatter: buttons
    }
    ];
    const products = [
        {
            id: '1',
            name: 'name1',
            price: 'price'
        },
        {
            id: '2',
            name: 'name1',
            price: 'price'
        },
        {
            id: '3',
            name: 'name1',
            price: 'price'
        }
    ]
    return (
        <div>
            <NavigationBar name={'test'}/>
            <div className='w-50'>
                <BootstrapTable keyField='id' data={products} columns={columns}
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
                show={modalShow}
                onHide={() => setModalShow(false)}
                data={clickedRow}
            />

        </div>
    );
};

export default Fields;