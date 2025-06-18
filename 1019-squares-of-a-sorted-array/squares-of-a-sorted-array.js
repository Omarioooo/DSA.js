/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let sqrNums = []
    for (let i = 0; i < nums.length; i++) {
        sqrNums[i] = Math.pow(nums[i], 2);

        // Insertion sort
        for (let j = i; j > 0; j--) {
            let secPtr = sqrNums[j];
            let fPtr = sqrNums[j-1];

            if (fPtr > secPtr) {
                let temp = sqrNums[j];
                sqrNums[j] = sqrNums[j-1];
                sqrNums[j-1] = temp;
            }else{
                break;
            }
        }
    }

    return sqrNums;
};