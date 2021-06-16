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

console.log(twoSumWithHash([5, 2, 3,3], 6))
