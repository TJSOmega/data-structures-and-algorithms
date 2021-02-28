'use strict';



'use strict';


const binarySearch = function (arr, num) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if ( arr[mid] === num) {
      return mid;
    } else if (arr[mid] > num) {
      end = mid -1;
    } else {
      start = mid + 1;
    }

  }
  return -1;
};

module.exports = binarySearch;
