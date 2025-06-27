/**
 * Performs Selection Sort on the given array.
 *
 * Time Complexity Analysis:
 * -------------------------
 * The time complexity for Selection Sort is **O(N²)** in all cases:
 * 
 * - **Best Case:** O(N²)
 * - **Average Case:** O(N²)
 * - **Worst Case:** O(N²)
 *
 * Reason:
 * -------
 * The algorithm uses two nested loops:
 * 
 * - The outer loop runs from index 0 to (n-2), i.e., (n-1) times.
 * - For each iteration of the outer loop (at index i),
 *   the inner loop runs from (i+1) to (n-1), making (n-i-1) iterations.
 *
 * Total number of comparisons ≈ (n-1) + (n-2) + (n-3) + ... + 1
 *
 * This is the sum of the first (n-1) natural numbers:
 *
 *    Total Comparisons ≈ (n * (n-1)) / 2 ≈ O(N²)
 *
 * Even in the best case (already sorted array), the algorithm
 * still performs the same number of comparisons, making it
 * inefficient for large datasets.
 *
 * Space Complexity:
 * -----------------
 * - **O(1)** (In-place sorting, no extra space used)
 */

let selectionSort =  function (arr){
    let n = arr.length;

    for (let i=0; i< n-1; i++){
        let minIndex = i;

        // searching for the min value on the unsorted part
        for (let j = i + 1; j < n; j++) {
            minIndex = arr[j] < arr[minIndex] ? j : minIndex;
        }

        swap(minIndex, i);

    }


    function swap (minIndex, currIndex){
        let temp = arr[currIndex];
        arr[currIndex] = arr[minIndex];
        arr[minIndex] = temp;
    }
}