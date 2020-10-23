//get second larger value from the array
function getSecondLargest(nums) {
    // Complete the function
    let sortnum=nums.sort();
    sortnum=[...new Set(sortnum)];
    let index=sortnum.length-2;
    return sortnum[index];
  
}