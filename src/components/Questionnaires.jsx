import React, {useEffect, useState} from 'react';
import NavigationBar from "./NavigationBar";
import axios from "axios";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';

const Questionnaires = () => {
    const [quests, setQuestionnaires] = useState([]);
    const navigate = useNavigate();

    function loadQuestionnaires() {
        axios.get("http://localhost:8080/questionnaires", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(response => {
            console.log(response.data)
            setQuestionnaires(response.data)
        })
    }

    useEffect(() => {
        loadQuestionnaires()
    }, [])

    function CustomListGroupItem() {
        return (
            quests.map(m => <ListGroupItem key={m.id} action
                                           onClick={() => navigate("/portal/questionnaires/" + m.id)}>m.name
                m.creationDate</ListGroupItem>)
        )
    }

    return (
        <div>
            <NavigationBar/>
            <div className='w-50'>
                <ListGroup>
                    <CustomListGroupItem/>
                </ListGroup>
            </div>
        </div>
    );
};

export default Questionnaires;