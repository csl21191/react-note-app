import React, { Component } from 'react';
import { Form, Button, ButtonToolbar } from 'react-bootstrap';
import { connect } from "react-redux";
import { deleteNote, updateNote } from '../../../redux/note/note.actions';

class EditNote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            date: this.props.date,
            content: this.props.content,            
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { title, date, content } = this.state;
        const { updateNote } = this.props;
        updateNote({
                title: title,
                date: date,
                content: content
            });
        
        this.setState({
            title: '',
            content: '',
            date: ''
        }) 
        this.props.handleClose();            
    }

    handleNoteDelete = () => {
        const { date } = this.state;
        const { deleteNote } = this.props;
        deleteNote({
                date: date
            });
        this.setState({
            title: '',
            content: '',
            date:''
        }) 
        this.props.handleClose();         
    }

    

    render() {        
        const { title, content } = this.state;        
        return(           
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Title" 
                        name="title" 
                        value={title}
                        onChange={this.handleChange}/>                    
                </Form.Group>

                <Form.Group controlId="content">
                    <Form.Label>Content</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows="3" 
                        placeholder="Write something...." 
                        name="content" 
                        value={content}
                        onChange={this.handleChange}/>
                </Form.Group>

                <ButtonToolbar>
                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                    <Button variant="defalt" type="button" onClick={this.handleNoteDelete}>
                        Discard
                    </Button>
                </ButtonToolbar>
            </Form>       
        );
    }
}



const mapDispatchToProps = dispatch => ({
    deleteNote: note => dispatch(deleteNote(note)),
    updateNote: note => dispatch(updateNote(note))
});
export default connect(null, mapDispatchToProps)(EditNote);