const repeatString = function(string, num) { // Write a function that simply repeats the string a given number of times: This function will take two arguments, `string` and `num`.
    var repeatedString = ""; // Create a variable to hold the string you're going to return
    
    while (num > 0) { // Create a loop that repeats the given number of times and add the given string to the result on each loop
        repeatedString += string;
        num--;
    }

    if (num < 0) { // Check to see if num is negative
        return('ERROR')
    }
    
    return repeatedString;



    // second solution 
//     if (num < 0) return "ERROR";
//     let string = "";
//     for (let i = 0; i < num; i++) {
//       repeatedString += string;
//     }
//     return repeatedString;
//     };
};

// Do not edit below this line
module.exports = repeatString;
