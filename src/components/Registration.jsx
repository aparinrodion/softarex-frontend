import React, {useState} from 'react';
import {MDBBtn, MDBContainer, MDBInput} from "mdb-react-ui-kit";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Registration = () => {
    let [email, setEmail] = useState(null);
    let [password, setPassword] = useState(null);
    let [firstName, setFirstName] = useState(null);
    let [lastName, setLastName] = useState(null);
    let [phoneNumber, setPhoneNumber] = useState();

    function registerUser() {
        let newUser = {
            email,
            password,
            firstName,
            lastName,
            phoneNumber
        }
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)
        };
        fetch('http://localhost:8080/register', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    return (
        <div className="d-flex align-items-center justify-content-center h-100">
            <MDBContainer className="p-3 my-5 d-flex flex-column w-25">
                <div className="text-center">
                    <h1>Sign up</h1>
                </div>
                <MDBInput wrapperClass='mb-2' onChange={e => setEmail(e.target.value)} type="email"
                          placeholder="Email"/>
                <MDBInput wrapperClass='mb-2' onChange={e => setPassword(e.target.value)} type="password"
                          placeholder="Password"/>
                <MDBInput wrapperClass='mb-2' type="password" placeholder="Confirm password"/>
                <MDBInput wrapperClass='mb-2' onChange={e => setFirstName(e.target.value)} type="text"
                          placeholder="First name"/>
                <MDBInput wrapperClass='mb-2' onChange={e => setLastName(e.target.value)} type="text"
                          placeholder="Last name"/>
                <PhoneInput
                    inputStyle={{width: '100%'}}
                    containerStyle={{marginBottom: '2%'}}
                    country={'by'}
                    onChange={setPhoneNumber}
                />

                <MDBBtn type={'submit'} onClick={registerUser} className="mb-4 mu-2">Sign up</MDBBtn>

                <div className="text-center">
                    <p>Already have account? <a href="http://localhost:3000/portal/login">Log in</a></p>
                </div>
            </MDBContainer>
        </div>
    );
};

export default Registration;