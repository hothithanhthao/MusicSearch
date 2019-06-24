export const REMOVEMUSICIAN = 'search/REMOVEMUSICIAN';

export const removeMusician = (id) => {
    return {
        type: REMOVEMUSICIAN,
        payload: id
    };
}