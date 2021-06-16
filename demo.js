function twoSumWithHash(arr, target) {
  if (!arr || arr.length === 0) return [];
  
  // hashmap
  let hash = {};

  for (let i=0; i < arr.length; i++) {
    const elem = target - arr[i];
    if (hash[elem] >= 0) {
      return [hash[elem], i];
    } else {
      hash[arr[i]] = i;
    }
  }
  return [];
}


const twoSumWithSort = (arr, target) => {
  if (!arr || arr.length === 0) return [];

  // sort the array
  arr.sort((a, b) => a - b);

  for (let i = 0, j = arr.length - 1; i <= j ; ) {
    const sum = arr[i] + arr[j];
    if (sum === target) {
      return true;
    } else if (sum > target) {
      j--;
    } else {
      i++;
    } 
  }
  return false;
}

const array = [5, 2, 3, 3], target = 6;
console.log(twoSumWithHash(array, target))
console.log(twoSumWithSort(array, target))
