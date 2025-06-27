/**
 * Performs Bubble Sort on the given array.
 *
 * Time Complexity Analysis:
 * -------------------------
 * The time complexity for Bubble Sort is **O(N²)** in both the average and worst cases.
 * 
 * - **Best Case:** O(N) → (When the array is already sorted and the algorithm uses the optimization with swap counter to stop early.)
 * - **Average Case:** O(N²)
 * - **Worst Case:** O(N²)
 *
 * Reason:
 * -------
 * Bubble Sort uses two nested loops:
 * 
 * - The outer loop runs (n-1) times in the worst case.
 * - The inner loop compares adjacent elements and performs swaps when needed.
 *
 * Total number of comparisons (in worst case):
 * - For n elements: (n-1) + (n-2) + ... + 1 ≈ (n * (n-1)) / 2 → O(N²)
 *
 * Optimization:
 * -------------
 * - With the use of a swap counter (or flag), the algorithm can detect if no swaps happened
 *   in a full pass (meaning the array is already sorted).
 * - This makes the **best case** time complexity **O(N)** when the array is sorted.
 *
 * Space Complexity:
 * -----------------
 * - **O(1)** (In-place sorting, no extra space required except a temporary variable for swapping.)
 *
 * Stability:
 * ----------
 * - Bubble Sort is a **stable sorting algorithm**, meaning the relative order of equal elements is preserved.
 */



let bubbleSort = function(arr) {
    let n = arr.length;

    for (let i = n - 1; i >= 0; i--) {
        let swapCounter = 0;

        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1);
                swapCounter++;
            }
        }

        // If no swaps happened, array is already sorted
        if (swapCounter === 0) {
            break;
        }
    }

    function swap(firstPtr, secPtr) {
        let temp = arr[firstPtr];
        arr[firstPtr] = arr[secPtr];
        arr[secPtr] = temp;
    }
}