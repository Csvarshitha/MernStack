// Write a program to add zeros after every 3 values in an array.

// let arr = [1,2,3,4,5,6,7]
let arr1 = []
function add(arr){
    for(let i=0;i<arr.length;i++){
        arr1.push(arr[i])
        if((i+1)%3 == 0){
            arr1.push(0)

        }
    }
    return arr1

}

console.log(add([1,2,3,4,5,6,7,8,9]));
