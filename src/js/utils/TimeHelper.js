//Function return the timestamp value when user is searching term
export function getTimeStamp(temp=null) {
    //Create the current date value
    var current_date = new Date()

    //Check if there is no supplied date
    if(temp === null){
        temp = current_date
    }

    var hour = temp.getHours()
    var minute = temp.getMinutes()
    var second = temp.getSeconds()

    //Check hour,minute and second are two digits or one digit to add 0 before
    if(hour < 10|| minute<10|| second<10){
        hour = '0' + hour.toString()
        minute = '0' + minute.toString()
        second = '0' + second.toString()
    }
  
    var milsesond = temp.getMilliseconds().toString()
    var result = (hour + ":" + minute + ":" + second + "." + milsesond).toString()
    return result;
}