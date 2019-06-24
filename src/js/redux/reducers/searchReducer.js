import { fromJS } from 'immutable';

import { SEARCHMUSICIAN } from '../actions/searchMusicianAction';
import { CLEARSEARCH } from '../actions/clearSearchAction';
import { REMOVEMUSICIAN } from '../actions/removeMusicianAction';

const defaultState = {
  searchTerm: '',
  foundMusicians: []
};

const searchReducer = (state = fromJS(defaultState), action) => {
  switch(action.type) {
    case SEARCHMUSICIAN:      
      const { searchTerm, results } = action.payload;
      
      return state.set('searchTerm', searchTerm)
                  .set('foundMusicians', fromJS(results));

    case CLEARSEARCH:
      return state.set('searchTerm', '')
                  .set('foundMusicians', fromJS([]));

    case REMOVEMUSICIAN:
      const musicians = state.get('foundMusicians').filter(m => m.get('msId') !== action.payload);
      return state.set('foundMusicians', musicians);

    default:
      return state;
  }
};

export default searchReducer;