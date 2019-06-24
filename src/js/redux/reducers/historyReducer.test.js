//Add your imports here as you see fit
import historyReducer from './historyReducer';

import { fromJS } from "immutable";
import addHistoryAction from '../actions/addHistoryAction';
import {getTimeStamp} from '../../utils/TimeHelper';
//MOCKS
//mock getTimeStamp function.
const timestamp = jest.fn(()=> getTimeStamp())

const initialState = { 
    previousQueries: [],
    totalQueriesPerformed: 0 
};
//RESET STATES
//before each test, reset the historyReducer to a default state
//use the returned state as a starting point to update the store

//TESTS
describe('historyReducer', () => {

    beforeEach(() => jest.resetModules());

    describe('case ADDHISTORY', () => {
       

        test('has a default state', () => {
            const action = { type: 'ADDHISTORY' };
           
            //Test the default state of the reducer.
            //We want to make sure it is always the same (an empty queries object and the total queries == 0)
            expect(historyReducer(initialState,action)).toEqual(initialState)
        });

        test('has an immutable state', () => {
            const action = { type: 'ADDHISTORY'};
            
            //Test that the default state is an immutable object and not a default Javascript object literal
            expect(historyReducer(fromJS(initialState),action)).toEqual(fromJS(initialState))
        });

        test('adds a new record and increases the total amount', () => {
            const action = { type: 'ADDHISTORY'};
            const newRecord = historyReducer(initialState,action)
           
            //Add a new record to the store by correctly sending a new action to the reducer.
            //Verify that both the array and the total count have been updated
            //verify that it has a timestamp

           // expect(newRecord).toContain(timestamp)
        });

        xtest('adds multiple records and increases the total amount', () => {
            //Add multiple new records to the store
            //Verify that all of them are in the collection and that the total amount has the correct number
        });
    });

    //ADD TESTS FOR CLEARHISTORY HERE
});