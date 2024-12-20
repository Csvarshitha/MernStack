// Write a function to find the maximum number in an array.



let num = [1,2,3,3,4,8,2]
function max(num){
    for(let i=0;i<=num.length-1;i++){
        if(num[i] > num[i+1]){
            console.log(num[i]);
            break;
        }
    }
}
max(num)
