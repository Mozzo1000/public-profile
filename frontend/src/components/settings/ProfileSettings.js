import React, { useState } from 'react'
import { Form, Col, Card, Button} from 'react-bootstrap';
import nationalities from '../../utilities/Nationality';

export default function ProfileSettings({data}) {
    const [save, setSave] = useState();
    const nationality_list = nationalities.map((nationality) => 
                                    <option>{nationality}</option>
                                );

    const handleChange = (event) => {
        setSave(true);
    }
    
    return(
        <Card>
            <Card.Body>
                <Card.Title>Your profile information {save ? (<Button>Save</Button>): <Button disabled>Save</Button>}</Card.Title>
                <hr />
                <Form onChange={handleChange}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="form_firstname">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" placeholder="John"></Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="form_lastname">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" placeholder="Doe"></Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="form-birthdate">
                            <Form.Label>Birth date</Form.Label>
                            <Form.Control type="date"></Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="form-birthplace">
                            <Form.Label>Birth place</Form.Label>
                            <Form.Control type="text" placeholder="New York"></Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="form-gender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                <option>Female</option>
                                <option>Male</option>
                                <option>Other</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="form-nationality">
                            <Form.Label>Nationality</Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                {nationality_list}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Card.Body>
        </Card>
    )
}