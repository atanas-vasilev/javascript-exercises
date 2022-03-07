const repeatString = function(str, times) {
    
    if (times < 0) {
        return 'ERROR';
    }else if (times == 0) {
        return '';
    }else{
        // return srt.repeat(times);
        let newString = '';
        for (let i = 0; i < times; i++) {
            newString = newString+str;        
        }
        return newString
    }
    
};

// Do not edit below this line
module.exports = repeatString;
