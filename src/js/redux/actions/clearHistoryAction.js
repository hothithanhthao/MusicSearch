export const CLEARHISTORY = 'history/CLEARHISTORY';
export const clearHistory = (history) => {
    return {
        type: CLEARHISTORY,
        payload: history
    };
}