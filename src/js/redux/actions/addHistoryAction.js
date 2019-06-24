export const ADDHISTORY = 'history/ADDHISTORY';
export const addHistory = (history) => {
    return {
        type: ADDHISTORY,
        payload: history
    };
}