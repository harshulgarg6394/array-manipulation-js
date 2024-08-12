function addnumber(arr, element) {
  arr.push(element);
  console.log(arr);
}

function removenumber(arr,element){
  const index = arr.indexOf(element);
  if (index !== -1) {
    arr.splice(index, 1);
  } else {
    console.log("Element not found in the array.");
  }
  console.log(arr);
}
function sorting(arr){
  arr.sort(function(a,b){
    return a-b;
  })
  console.log(arr)
}
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
    }
  }
  console.log(sum);
}

function avg(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
    }
  }
  console.log(sum/arr.length)
}


let myArray = [3,5,8,7,9];
addnumber(myArray, 4); 
removenumber(myArray,9);
sorting(myArray);
sumArray(myArray);
avg(myArray)


