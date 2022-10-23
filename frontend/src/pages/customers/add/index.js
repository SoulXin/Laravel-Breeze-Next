import { Layout } from '../../../layout';
import React from 'react';
import { Button, Card, Alert, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { withRouter } from 'next/router';
import axios from '../../../lib/axios';
import { toast } from "react-toastify";

const Index = (props) => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        try{
            await axios.post(`/api/customers/store`, data);
            toast.success("Success add data");
            router.push('/customers');
        } catch (error){
            toast.error(error.response.data.message);
        }
    }

    return (
        <Layout>
            <Card className="mb-4">
                <Card.Header>
                    Add Customers
                    <Button 
                    type='button' 
                    className='btn btn-danger float-end'
                    onClick={() => props.router.push(`/customers`)}
                    >Cancel</Button>
                </Card.Header>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Card.Body>
                            <Form.Group className="mb-3" controlId="customerName">
                                <Form.Label>Customer Name</Form.Label>
                                <Form.Control name="name" disabled={isSubmitting} {...register('name', { required: true })} type="text" placeholder="Enter name" />
                            </Form.Group>
                            {errors.name?.type === 'required' && <Alert variant="danger" className="p-2">
                                Customer Name is required
                            </Alert>}
                            <Form.Group className="mb-3" controlId="customerAddress">
                                <Form.Label>Customer Address</Form.Label>
                                <Form.Control name="address" disabled={isSubmitting} {...register('address', { required: true })} type="text" placeholder="Enter address" />
                            </Form.Group>
                            {errors.address?.type === 'required' && <Alert variant="danger" className="p-2">
                                Customer Address is required
                            </Alert>}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Customer Phone</Form.Label>
                                <Form.Control name="phone" disabled={isSubmitting} {...register('phone', { required: true })} type="text" placeholder="Enter phone" />
                            </Form.Group>
                            {errors.phone?.type === 'required' && <Alert variant="danger" className="p-2">
                                Customer Phone is required
                            </Alert>}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Customer City</Form.Label>
                                <Form.Control name="city" disabled={isSubmitting} {...register('city', { required: true })} type="text" placeholder="Enter city" />
                            </Form.Group>
                            {errors.city?.type === 'required' && <Alert variant="danger" className="p-2">
                                Customer City is required
                            </Alert>}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Customer Pos Code</Form.Label>
                                <Form.Control name="pos_code" disabled={isSubmitting} {...register('pos_code', { required: true })} type="text" placeholder="Enter pos code" />
                            </Form.Group>
                            {errors.pos_code?.type === 'required' && <Alert variant="danger" className="p-2">
                                Customer Pos Code is required
                            </Alert>}
                            <Form.Group className="mb-3" controlId="isActive">
                                <Form.Check type="checkbox" label="Active" />
                            </Form.Group>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary" type="submit" disabled={isSubmitting}>
                                Submit
                            </Button>
                        </Card.Footer>
                    </Form>
            </Card>
        </Layout>
    )
};

export default withRouter(Index);