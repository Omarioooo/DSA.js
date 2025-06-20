/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let arr = [];
    for(let i = 1; i<=n; i++) arr.push(i);
    
    let curIndex = 0;
    while(arr.length > 1){
        curIndex = (curIndex + k - 1) % arr.length;

        arr.splice(curIndex, 1)
    }

    return arr[0];
};