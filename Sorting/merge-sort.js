/**
 * Performs Merge Sort on the given array (recursive, divide and conquer approach).
 *
 * Time Complexity Analysis:
 * -------------------------
 * - **Best Case:** O(N log N)
 * - **Average Case:** O(N log N)
 * - **Worst Case:** O(N log N)
 *
 * Reason:
 * -------
 * - The algorithm recursively divides the array into halves → log N levels of recursion.
 * - At each level, merging takes linear time → O(N) work per level.
 * - Total time complexity = O(N log N).
 *
 * Space Complexity:
 * -----------------
 * - **O(N)** → Because of the use of temporary arrays for merging.
 *
 * Stability:
 * ----------
 * - Merge Sort is a **stable sorting algorithm**, meaning it preserves the relative order of equal elements.
 *
 * Method:
 * -------
 * - Divide: Recursively split the array into two halves.
 * - Conquer: Recursively sort the two halves.
 * - Combine: Merge the two sorted halves into one sorted array.
 */


let mergeSort = function(arr, start, end) {
    if (start >= end) return;

    let mid = Math.floor((start + end) / 2);

    // sort the first half
    mergeSort(arr, start, mid);

    // sort the second half
    mergeSort(arr, mid + 1, end);

    // Merge the two halves
    merge(arr, start, mid, end);
}

function merge(arr, start, mid, end) {
    let left = arr.slice(start, mid + 1);
    let right = arr.slice(mid + 1, end + 1);

    let leftIndex = 0, rightIndex = 0, fillIndex = start;

    // Merge both arrays while both have elements
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            arr[fillIndex++] = left[leftIndex++];
        } else {
            arr[fillIndex++] = right[rightIndex++];
        }
    }

    // Copy any remaining elements from left
    while (leftIndex < left.length) {
        arr[fillIndex++] = left[leftIndex++];
    }

    // Copy any remaining elements from right
    while (rightIndex < right.length) {
        arr[fillIndex++] = right[rightIndex++];
    }
}

