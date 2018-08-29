(function sort(arr2) {
  let arr = [3, 2, 4, 5, 1];
  let i, j, temp;
  for (i = 0; i < arr.length; i++ ) {
    for (j = i + 1; j < arr.length; j++ ) {
      if (arr[j] < arr[i]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
})