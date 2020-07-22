const INITIAL_STATE = {
    notes: []
}

const noteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_NOTE': console.log("add state",state);
            return {
                notes:[
                    ...state.notes,
                    {
                        title: action.payload.title,
                        content: action.payload.content,
                        date: action.payload.date
                    }
                ]                
            }
        case 'DELETE_NOTE': 
            return {
                notes:[...state.notes.filter((note) => note.date !== action.payload.date )]
            }
            //state.notes.filter((note) => note.date !== action.payload.date )        
        case 'UPDATE_NOTE': console.log(state);
            return {
                notes:[
                    ...state.notes.map((note) => {
                        if(note.date === action.payload.date) {
                            return {
                                ...note,
                                title: action.payload.title,
                                content: action.payload.content
                            }
                        } 
                        else return note                       
                    })
                ]
            }
        default: 
            return state;
    }
}

export default noteReducer;