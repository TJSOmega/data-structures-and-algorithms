# Array Binary Search

### Dev Team: Davion Garcia, Terrence Simms

## Problem Domain:
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.


## Approach and Efficiency

- Identify in an array the midpoint
- Find out if the "Search Key" is greater or less than the midpoint
- If the "Search Key" is less, midpoint becomes the new End of Array
- If the "Search Key" is more, midpoint becomes new start of array
- Repeat the process until the "Search Key" is found.

## Solution
[Whiteboard](./assets/BinarySearchArray.jpeg)