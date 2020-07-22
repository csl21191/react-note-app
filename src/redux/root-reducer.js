import { combineReducers } from 'redux';
import noteReducer from './note/note.reducer';

export default combineReducers({
    notes: noteReducer
});