import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AddNote from '../components/notes/add-note/add-note.component';
import ListNotes from '../components/notes/list-notes/list-notes.component';

function Note() {    
    return(
        <Container>
            <Row>          
                <Col md={4}>
                    <AddNote />
                </Col>
                <Col md={8}>
                    <ListNotes/>
                </Col>
            </Row>             
        </Container>   
    );
}

export default Note;