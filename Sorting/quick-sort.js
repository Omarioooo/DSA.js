/**
 * Performs Quick Sort on the given array (recursive, divide and conquer approach).
 *
 * Time Complexity Analysis:
 * -------------------------
 * - Best Case: O(N log N)
 * - Average Case: O(N log N)
 * - Worst Case: O(N^2)
 *
 * Reason:
 * -------
 * - The algorithm recursively partitions the array around a pivot → log N levels of recursion (best/average case).
 * - At each level, partitioning takes linear time → O(N) work per level.
 * - Worst case happens when pivot selection is poor (e.g., already sorted array with bad pivot choice).
 *
 * Space Complexity:
 * -----------------
 * - O(log N) → Due to recursion stack (in-place sorting, no extra arrays used).
 *
 * Stability:
 * ----------
 * - Quick Sort is an **unstable sorting algorithm**, meaning it may change the relative order of equal elements.
 *
 * Method:
 * -------
 * - Divide: Choose a pivot and partition the array into two parts.
 * - Conquer: Recursively sort the two sub-arrays.
 * - Combine: No merge step needed, sorting happens in-place during partitioning.
 */


let quickSort = function(arr, start, end){
    if(start >= end) return;

    let pivot = start;
    let i = start + 1;
    let j = end;

    while(i <= j){
        while (i <= end && arr[i] <= arr[pivot]) i++;
        while (j > start && arr[j] > arr[pivot]) j--;

        if (i < j) {
            swap(arr, i, j);
        }
    }

    quickSort(arr, start, j-1);
    quickSort(arr, j+1, end);
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}