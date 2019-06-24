import * as timeHelper from './TimeHelper';

describe('getTimeStamp', () => {
    test('should return a string', () => {
        //arrange
        
        //act
        const result = timeHelper.getTimeStamp();

        //asset
        expect(typeof result).toBe('string');
    });

    test('returns a correct timestamp', () => {
        //arrange
        const testDate = new Date(2019, 1, 1, 12, 30, 30, 500);
        const expected = '12:30:30.500';

        //act
        const result = timeHelper.getTimeStamp(testDate);

        //assert
        expect(result).toBe(expected);
    });

    test('returns the current date if no date was supplied', () => {
        //ARRANGE
        const now = new Date();

        //ACT
        const timeStampNumbers = timeHelper.getTimeStamp().split(':');
        
        //ASSERT
        const expected = {
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds()
        };

        const result = {
            hours: parseInt(timeStampNumbers[0]),
            minutes: parseInt(timeStampNumbers[1]),
            seconds: parseInt(timeStampNumbers[2].split('.')[0])
        };

        expect(result).toEqual(expected);
    });

    test('returns 2 digits when the original has 2 digits', () => {
        //ARRANGE
        const testDate = new Date(2019, 1, 1, 13, 14, 15, 500);
        const expected = '13:14:15.500';

        //ACT
        const result = timeHelper.getTimeStamp(testDate);
    
        //ASSERT
        expect(result).toBe(expected)
    });


    test('returns 2 digits when the original has 1 digit', () => {
        //ARRANGE
        const testDate = new Date(2019, 1, 1, 2, 3, 4, 500);
        const expected = '02:03:04.500';

        //ACT
        const result = timeHelper.getTimeStamp(testDate);
    
        //ASSERT
        expect(result).toBe(expected)
    });
});