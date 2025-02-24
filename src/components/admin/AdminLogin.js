import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import UserData from '../../data/UserData';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    const navigate = useNavigate();

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('')

    console.log("email pass", email, password);


    function loginHandler() {
        UserData.map((item, index) => {
            if (item.email === email && item.password == password) {
                saveLocalstorage(item)
                return true
            }
        })
    }

    function saveLocalstorage(data) {
        if (data.role == 1) {
            localStorage.setItem('adminlogin', JSON.stringify({ email: data.email, role: data.role, id: data.id }))
            navigate('/admin/dashboard', { replace: true });
        } else {
            localStorage.setItem('userlogin', JSON.stringify({ email: data.email, role: data.role, id: data.id }))
        }
    }

    // function removeLocalstorage(data) {
    //     if (data.role == 1) {
    //         localStorage.removeItem('adminlogin')
    //     } else {
    //         localStorage.removeItem('userlogin')
    //     }
    // }
    return (

        <>
            <div className='container'>
                <div className='row justify-content-center mb-5 mt-5'>
                    <div className='col-md-4 bg-dark text-white pt-5 pb-5 px-4'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="button" onClick={() => loginHandler()}>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
                <div className='row'>
                </div>
            </div>
        </>

    );
}

export default AdminLogin;