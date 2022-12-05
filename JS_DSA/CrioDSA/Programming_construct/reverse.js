

//JavaScript parseInt()
/* Definition and Usage
The parseInt method parses a value as a string and returns the first integer. */

//solution1: reverse the number !
const  num = 1002;
const reverse = ( num ) => parseInt(String(num)
        .split("")
        .reverse()
        .join(""),10);

console.log(reverse(num));


//solution2 : Iterative Way
//TC: O(log n) SC: O(1)
let nums = 4562;

function reverseDigits(nums) {
    let rev_num = 0;
    while(nums > 0 ) {
        rev_num = rev_num * 10 + nums % 10;
        nums = Math.floor(nums/10);
    }
    return rev_num;
}

console.log(reverseDigits(nums));

/******************** */


