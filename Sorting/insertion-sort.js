/**
 * Performs Insertion Sort on the given array.
 *
 * Time Complexity Analysis:
 * -------------------------
 * The time complexity for Insertion Sort depends on the initial state of the array:
 *
 * - **Best Case:** O(N) → When the array is already sorted.
 * - **Average Case:** O(N²)
 * - **Worst Case:** O(N²) → When the array is sorted in reverse order.
 *
 * Reason:
 * -------
 * - The algorithm processes the array one element at a time, starting from index 1.
 * - For each element, it compares backwards with the sorted portion of the array
 *   and shifts larger elements to the right until the correct position for the element is found.
 *
 * Number of Comparisons and Shifts:
 * ---------------------------------
 * - In the **best case** (already sorted), each element requires only 1 comparison → O(N).
 * - In the **worst case** (reverse sorted), each new element has to be compared and shifted past
 *   all previously sorted elements → Total ≈ (n * (n-1)) / 2 → O(N²).
 *
 * Space Complexity:
 * -----------------
 * - **O(1)** (In-place sorting, no extra space required except a temporary variable for swapping.)
 *
 * Stability:
 * ----------
 * - Insertion Sort is a **stable sorting algorithm**, meaning it preserves the relative order of equal elements.
 */


let insertionSort = function(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            swap(j, j - 1);
            j--;
        }
    }

    function swap(i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
