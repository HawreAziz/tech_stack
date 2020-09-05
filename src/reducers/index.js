import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectLibrary from './SelectLibraryReducer';


export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectLibrary,
});
