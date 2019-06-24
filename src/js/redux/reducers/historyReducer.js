import { fromJS } from "immutable";

import { ADDHISTORY } from '../actions/addHistoryAction';
import { CLEARHISTORY } from '../actions/clearHistoryAction';
import { getTimeStamp } from "../../utils/TimeHelper";

const defaultState = {
    previousQueries: [],
    totalQueriesPerformed: 0
};

const historyReducer = (state = fromJS(defaultState), action) => {

    switch(action.type) {
        case ADDHISTORY:
            action.payload.timestamp = getTimeStamp();
            return state.set('previousQueries', state.get('previousQueries').push(fromJS(action.payload)))
                        .set('totalQueriesPerformed', state.get('previousQueries').count() + 1);

        case CLEARHISTORY:
                return state.set('previousQueries', fromJS([]))
                            .set('totalQueriesPerformed', 0);
        default:
            return state;
    }
}


export default historyReducer;