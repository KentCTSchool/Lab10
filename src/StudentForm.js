import React, { Component } from 'react'
import {Col, Row, Form, Button } from "react-bootstrap";


export default class StudentForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email : '',
             name : '',
             address_1 : '',
             address_2 : '',
             city : '',
             province : '',
             postal_code : '',
             visibiliy: false
        }
        this.readData = this.readData.bind(this);
    }

    province = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 
                'Newfoundland and Labrador', 'Nova Scotia',
                'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan' ]
    readData(event){
        this.setState({[event.target.name] : event.target.value})
    }
    submitData = () => {
        this.setState({visibiliy: !this.state.visibiliy});
        console.log(this.state);
        console.log(JSON.stringify(this.state));
    }

    render() {
        return (
            <div className="container">
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.readData}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" name="name" onChange={this.readData}/>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="1234 Main St" name="address_1" onChange={this.readData}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control type="text" placeholder="Apartment, studio, or floor" name="address_2" onChange={this.readData}/>
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" name="city"  onChange={this.readData}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Province</Form.Label>
                        <Form.Select defaultValue="Select Province" name="province" onChange={this.readData}>
                            <option>Select Province</option>
                            {
                                this.province.map(name => (
                                <option key={name}>{name}</option>
                                ))
                            }
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control type="text" name="postal_code"  onChange={this.readData}/>
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="button" className="btn-success" onClick= {() => this.submitData()}>
                        Submit
                    </Button>
                </Form>
                <br></br>
                { this.state.visibiliy && 
                <div className="float-container"> 
                        <div className="float-child" id="label">
                            <div >Email: {this.state.email}</div> 
                            <div>Name: {this.state.name}</div>
                            <div>Address: {this.state.address_2} {this.state.address_1}</div>
                            <div>City: {this.state.city}</div>
                            <div>Province: {this.state.province}</div>
                            <div>Postal: {this.state.postal_code}</div>
                        </div>
                </div>
                }   
            </div>
            
        )
    }
}
