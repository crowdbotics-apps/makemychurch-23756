import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard120191547Reducer from '../features/Dashboard120191547/redux/reducers'
import Dashboard121191546Reducer from '../features/Dashboard121191546/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard120191547: Dashboard120191547Reducer,
Dashboard121191546: Dashboard121191546Reducer,

});