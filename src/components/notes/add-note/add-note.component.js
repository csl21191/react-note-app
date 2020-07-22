import React, { Component } from 'react';
import { Card, Form, Button, ButtonToolbar } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './add-note.styles.css';
import { connect } from "react-redux";
import { addNote } from '../../../redux/note/note.actions';

class AddNote extends Component {
    constructor(props){
        super(props);

        this.state = {
            show: false,
            date: new Date(),
            title: '',
            content: ''
        }
    }

    onChange = date => this.setState({ date, show: true });

    handleDiscard = () => {
        this.setState({
            show: false,
            title: '',
            content: ''
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { title, date, content } = this.state;
        const { addNote } = this.props;
        addNote({
                title: title,
                date: date,
                content: content
            });
        
        this.setState({
            title: '',
            content: '',
            show: false
        })
             
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        })
    }

    render(){         
        const { title, content } = this.state;       
        return(
            <div>
                <Calendar 
                    className="calendar" 
                    onChange={this.onChange}
                    value={this.state.date}/>

                <Card className={`${( this.state.show ? 'show' : 'hide' )}`} style={{ width: '100%' }}>            
                    <Card.Body>
                        <Card.Title>Add Note</Card.Title>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter Title" 
                                    name="title" 
                                    onChange={this.handleChange} 
                                    value={title}/>                    
                            </Form.Group>

                            <Form.Group controlId="content">
                                <Form.Label>Content</Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    rows="3" 
                                    placeholder="Write something...." 
                                    name="content" 
                                    onChange={this.handleChange} 
                                    value={content}/>
                            </Form.Group>                            
                            
                            <ButtonToolbar>
                                <Button variant="primary" type="submit">
                                    Save
                                </Button>
                                <Button variant="defalt" type="button" onClick={this.handleDiscard}>
                                    Discard
                                </Button>
                            </ButtonToolbar>
                        </Form>                
                    </Card.Body>
                </Card>
            </div>            
        );
    }
}



const mapDispatchToProps = dispatch => ({
    addNote: note => dispatch(addNote(note))
});

export default connect(null, mapDispatchToProps)(AddNote);