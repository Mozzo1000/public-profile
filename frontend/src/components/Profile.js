import React from 'react'
import { Jumbotron, Container, Image, Button } from 'react-bootstrap';
import { PencilSquare } from 'react-bootstrap-icons';

export default function Profile({ auth }) {
    return (
        <div>
            <Jumbotron fluid>
                <Container className="text-center">
                    <Image className="mx-auto" src="https://eu.ui-avatars.com/api/?size=128&background=random&name=Andreas+B" roundedCircle/>
                    <h2>{JSON.parse(localStorage.getItem('auth'))['display_name']}
                    <Button href="/settings" variant="outline-dark" size="sm"><PencilSquare/></Button></h2>
                </Container>
            </Jumbotron>
        </div>
    )
}