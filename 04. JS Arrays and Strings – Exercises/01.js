function arrayRotation(nums, n) {
    n = n % nums.length; 

  for (let i = 0; i < n; i++) {
    let firstElement = nums.shift(); // Remove the first element and store it
    nums.push(firstElement);         
  }

  
  return nums.join(' ');
}

console.log(arrayRotation(['5', '20', '31', '4', '20'], 2));