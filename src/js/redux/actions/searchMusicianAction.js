import _ from 'lodash';
import uuid from 'uuid';

export const SEARCHMUSICIAN = 'search/SEARCHMUSICIAN';

export const searchMusician = (searchTerm, results) => {
  const refinedResults = refineResults(results);
  const enhancedResults = enhanceResults(refinedResults);

  return {
    type: SEARCHMUSICIAN,
    payload: {
      searchTerm,
      results: enhancedResults
    }
  };
};

function refineResults(results) {
  return _.take(
           _.orderBy(
             _.filter(results, result => result.mbid), 
             result => parseInt(result.listeners), 'desc'),
           10);
}

function enhanceResults(refinedResults) {
  return refinedResults.map(r => {
    return { 
      ...r,
      msId: uuid.v4()
    };
  });
}