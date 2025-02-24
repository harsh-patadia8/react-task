import Table from 'react-bootstrap/Table';
import UserData from '../../data/UserData';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { FaPen, FaSearch } from "react-icons/fa";
import { HiArchive } from "react-icons/hi";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function AdminDashboard() {

    const navigate = useNavigate();
    // function checkLogin() {
    let chkAdminLogin = localStorage.getItem('adminlogin')
    chkAdminLogin = JSON.parse(chkAdminLogin)
    console.log(chkAdminLogin);
    if (chkAdminLogin.role !== 1) {
        navigate('/admin/login');
    }

    let [users, setUsers] = useState(UserData)
    const searchHandler = (query) => {
        setUsers([UserData.find((item) => item.username.toLowerCase().includes(query.toLowerCase()))])
        console.log("dataaa", users);
    }

    return (
        <>
            <div className='container'>
                <div className='row justify-content-end mb-5 mt-5'>
                    <div className='col-md-3'>
                        <Form inline>
                            <InputGroup>
                                <InputGroup.Text id="basic-addon1"><FaSearch /></InputGroup.Text>
                                <Form.Control
                                    placeholder="search here"
                                    aria-label="search-bar"
                                    aria-describedby="basic-addon1"
                                    onChange={(e) => searchHandler(e.target.value)}
                                />
                            </InputGroup>
                        </Form>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>user name</th>
                                    <th>email</th>
                                    <th>role</th>
                                    <th>Operations</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((data, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{data.id}</td>
                                                <td>{data.username}</td>
                                                <td>{data.email}</td>
                                                <td>{data.role ? 'admin' : 'user'}</td>
                                                {/* <td>
                                                    <Button variant='warning' className='mx-1'><FaPen /></Button>
                                                    <Button variant='danger' className='mx-1' ><HiArchive /></Button>
                                                </td> */}
                                            </tr>)
                                    })
                                }

                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>

        </>


    );
}

export default AdminDashboard;