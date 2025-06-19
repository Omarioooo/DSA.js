/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    // Base case
    if (n === 1) return 0;

    levelLength = Math.pow(2, n-1);
    let mid = levelLength/2;

    if(k <= mid){
        return kthGrammar(n-1, k);
    }else{
        return 1 - kthGrammar(n-1, k-mid);
    }
};