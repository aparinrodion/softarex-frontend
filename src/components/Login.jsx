import React from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn
}
    from 'mdb-react-ui-kit';

function Login() {
    return (
        <div className="d-flex align-items-center justify-content-center h-100">
            <MDBContainer className="p-3 my-5 d-flex flex-column w-25">
                <div className="text-center">
                    <h1>Login</h1>
                </div>
                <MDBInput wrapperClass='mb-4' required={true} label='Email address' id='form1' type='email'/>

                <MDBInput wrapperClass='mb-4' required={true} label='Password' id='form2' type='password'/>
                <div className="d-flex justify-content-between mx-3 mb-4">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me'/>
                    <a href="!#">Forgot password?</a>
                </div>

                <MDBBtn type={'submit'} className="mb-4">LOG IN</MDBBtn>
                <div className="text-center">
                    <p>Don't have account <a href="http://localhost:3000/portal/registration">Sign Up</a></p>
                </div>
            </MDBContainer>
        </div>
    )
        ;
}

export default Login;