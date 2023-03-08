import React, { useState, useEffect } from 'react'
import { Table, Form, Button, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Toast from "./Toast";
import { toast } from "react-toastify";
import { getUserDetails, updateUserProfile } from '../redux/actions/userActions'
import { listMyOrders } from '../redux/actions/orderActions'

const ProfileScreen = () => {
    window.scrollTo(0,0);
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [message, setMessage] = useState(null);

      const toastId = React.useRef(null);

      const Toastobjects = {
        pauseOnFocusloss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000,
      };

      const dispatch = useDispatch()

      const userDetails = useSelector((state) => state.userDetails);
      const { loading, error, user } = userDetails;


    //   const userLogin = useSelector((state) => state.userLogin);
    //   const { userInfo } = userLogin;

      const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
      const { success, loading:updateLoading } = userUpdateProfile;

      
      const orderListMy = useSelector((state) => state.orderListMy);
      const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;



      useEffect(() => {
            // if (!userInfo) {
            //       history.push('/login');
            // } else {
            //       if (!user.name) {
            //             dispatch(getUserDetails('profile'));
            //             dispatch(listMyOrders())
            //       } else {
            //             setName(user.name);
            //             setEmail(user.email);
            //       }
            // }
            dispatch(listMyOrders())
            dispatch(getUserDetails("profile"))
      }, [dispatch])

      const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
          if (!toast.isActive(toastId.current)) {
            toastId.current = toast.error("passswords do not match", Toastobjects);
            setMessage('Passwords do not match')
          }
        } else {
          if (!toast.isActive(toastId.current)) {
            dispatch(updateUserProfile({ id: user._id, name, email, password }));
            if (!toast.isActive(toastId.current)) {
              toastId.current = toast.success("profile updated", Toastobjects);
            }
          }
        }
      };
      return (
        <>
        <Toast />
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loader />}
        {updateLoading && <Loader />}
      <Row>
            <Col md={3}>
                  <h1>User Profile</h1>
                  {message && <Message variant='danger'>{message}</Message>}
                  {error && <Message variant='danger'>{error}</Message>}
                  {success && <Message variant='success'>Profile Updated</Message>}
                  {loading && <Loader />}
                  <Form onSubmit={submitHandler}>
                        <Form.Group controlId='name'>
                              <Form.Label>Name</Form.Label>
                              <Form.Control type='name' placeholder='Enter name' required value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                       <span>
                       
                       </span>
                        </Form.Group>

                        <Form.Group controlId='email'>
                              <Form.Label>Email Address</Form.Label>
                              <Form.Control type='email' placeholder='Enter email' required value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='password'>
                              <Form.Label>Password</Form.Label>
                              <Form.Control type='password' placeholder='Enter password' required value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='confirmPassword'>
                              <Form.Label>Confirm Password</Form.Label>
                              <Form.Control type='password' placeholder='Confirm password' required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className='py-4'>
                              <Button type='submit' variant='primary'>
                                    Update
                              </Button>
                        </Form.Group>
                  </Form>
            </Col>
            <Col md={9}>
           
                  <h1>My Orders</h1>
                  {loadingOrders ? <Loader /> : errorOrders ? <Message variant='danger'>
                        {errorOrders}
                  </Message> : (
                        <Table stripped bordered hover responsive className='table-sm'>
                              <thead>
                                    <tr>
                                          <th>ID</th>
                                          <th>DATE</th>
                                          <th>TOTAL</th>
                                          <th>PAID</th>
                                          <th>DELIVERED</th>
                                          <th></th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {orders.map(order => (
                                          <tr key={order.id}>
                                                <td>{order.id}</td>
                                                <td>{order.createdAt.substring(0, 10)}</td>
                                                <td>{order.totalPrice}</td>
                                                <td>{order.isPaid ? order.paidAt.substring(0, 10) : (
                                                      <i className='fas fa-times' style={{ color: 'red' }}>
                                                      </i>
                                                )}</td>
                                                <td>{order.isDelivered ? order.deliveredAt.substring(0, 10) : (
                                                      <i className='fas fa-times' style={{ color: 'red' }}>
                                                      </i>
                                                )}</td>
                                                <td>
                                                      <LinkContainer to={`/order/${order.id}`}>
                                                            <Button className='btn-sm' variant='light'>Details</Button>
                                                      </LinkContainer>
                                                     
                                                </td>
                                          </tr>
                                    ))}
                              </tbody>
                        </Table>
                  )}
            </Col>
      </Row>
      </>
      )
}

export default ProfileScreen;
