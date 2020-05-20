import { combineReducers } from 'redux';
import { fetchDocuments, docsErrored, docsLoading } from './docs';

export default combineReducers({
    fetchDocuments,
    docsErrored,
    docsLoading
}); 