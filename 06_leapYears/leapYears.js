const leapYears = year => {
    //Leap years are years divisible by four (like 1984 and 2004).
    //However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).
    let leap = false;
    if (year % 4 === 0) {
        leap = true;
        if (year % 100 === 0) {
            //not leap
            leap = false;
            if (year % 400 === 0) {
                //leap
                leap = true;
            }
        }
    }
    return leap;
};

// Do not edit below this line
module.exports = leapYears;
