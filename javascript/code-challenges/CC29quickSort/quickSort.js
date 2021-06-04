function quickSort(arr, low, high) {

  if (low >= high) { return; }
  if (low < high) {

    let pi = partition(arr, high, low);

    quickSort(arr, low, pi - 1);

    quickSort(arr, pi + 1, high);

  }

}


function partition(arr, low, high) {
  let i = low - 1;
  let pivot = arr[high];

  for (let j = low; j < high - 1; j++) {
    if(arr[j] < pivot) {
      i++;
      let swap = arr[j];
      arr[j] = arr[i];
      arr[i] = swap;
    }
    let temp = arr[high];
    arr[high] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return (i + 1);
}