import React, {useState} from 'react';
import {MDBBtn, MDBContainer, MDBInput} from "mdb-react-ui-kit";
import PhoneInput from "react-phone-input-2";
import NavigationBar from "./NavigationBar";

const Edit = () => {
    let [firstName, setFirstName] = useState('John')
    let [lastName, setLastName] = useState('Doe')
    let [email, setEmail] = useState('johndoe@gmail.com')
    let [phoneNumber, setPhoneNumber] = useState('+375292013419')

    function updateUser() {
        let newUser = {
            firstName,
            lastName,
            email,
            phoneNumber
        }
        console.log(newUser)
    }

    return (
        <div>
            <NavigationBar name={firstName + ' ' + lastName}/>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-25">
                <div className="text-center">
                    <h1>Sign up</h1>
                </div>
                <label>First Name</label>
                <MDBInput value={firstName} wrapperClass='mb-2' onChange={e => setFirstName(e.target.value)}
                          type="text"/>
                <label>Last Name</label>
                <MDBInput value={lastName} wrapperClass='mb-2' onChange={e => setLastName(e.target.value)} type="text"/>
                <label>Email</label>
                <MDBInput value={email} wrapperClass='mb-2' onChange={e => setEmail(e.target.value)} type="email"/>
                <label>Phone number</label>
                <PhoneInput
                    value={phoneNumber}
                    inputStyle={{width: '100%'}}
                    containerStyle={{marginBottom: '2%'}}
                    country={'by'}
                    onChange={setPhoneNumber}
                />

                <MDBBtn type={'submit'} onClick={updateUser} className="mb-4 mu-2">Save</MDBBtn>
            </MDBContainer>
        </div>
    );
};

export default Edit;