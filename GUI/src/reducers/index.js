import { combineReducers } from 'redux';
import messages from './messagesReducer';
import errors from './errors';
import alertReducer from './alertReducer';
import accountReducer from './accountReducer';

export default combineReducers({
    errors,
    messages,
    alertReducer,
    accountReducer,
}); 