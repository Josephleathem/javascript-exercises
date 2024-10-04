const sumAll = function(start, end) {
    if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)){
        return ('ERROR')
    }

    let sum = 0;
        
    if (end > start) {
            let diff = end - start 
            let i = 0
            while (i <= diff) {
                sum += i 
                i++
            }
        let sumAll = sum + end;
            return sumAll
    } else if (start > end) {
        let diff = start - end
        let i = 0
        while (i <= diff){
            sum += i
            i++
        }   
    let sumAll = sum + start;
        return sumAll
    }
};


// Do not edit below this line
module.exports = sumAll;
