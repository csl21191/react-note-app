import React, { Component } from 'react';
import { Card, Table, Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import ViewNote from '../view-note.component';
import EditNote from '../edit-note/edit-note.component';


class ListNotes extends Component { 
    
    constructor() {
        super();
        
        this.state = {
            show: false,
            switchFlag: false,
            selectedRowData: '',
        }
    }

    handleClose = () => this.setState({show:false, switchFlag: false});
    
    handleViewNote = (index) => {        
        this.setState({
                show: true, 
                selectedRowData : this.props.notesList[index],                
            });        
    }

    handleEditNote = (index) => {        
        this.setState({
                show: true, 
                switchFlag: true,
                selectedRowData : this.props.notesList[index],                                
            });        
    }
    
    render() {
        const { notesList } = this.props;
        return(  
            <div>                      
                <Card style={{ width: '100%' }}>            
                    <Card.Body>
                    <Card.Title>List Notes</Card.Title>
                    <Table responsive hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {                                 
                                notesList.map( (note, index) => (
                                    <tr key={index} onClick={() => this.handleViewNote(index)}>
                                        <td>{index}</td>
                                        <td>{note.title}</td>
                                        <td>{note.date.toString()}</td>
                                        <td>                        
                                            <Button variant="link" onClick={() => this.handleEditNote(index)}>Edit</Button>                     
                                        </td>
                                    </tr>
                                ) )
                                                              
                            }                    
                        </tbody>
                    </Table>
                    </Card.Body>
                </Card>   
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{ this.state.switchFlag ? 'Edit Note' : 'View Note' }</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        { this.state.switchFlag ? <EditNote show={this.state.show} handleClose={this.handleClose} {...this.state.selectedRowData}/> : <ViewNote {...this.state.selectedRowData}/> }
                    </Modal.Body>
                </Modal>
            </div>       
        );
    }        
}

const mapStateToProps = state => ({
    notesList: state.notes.notes.length > 0 ? state.notes.notes : []    
});

export default connect(mapStateToProps)(ListNotes);