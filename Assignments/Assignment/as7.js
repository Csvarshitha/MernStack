// Write a function to remove duplicate elements from an array without using default functions.
let arr = [1,2,3,4,3,2,1]
function removeDuplicate(arr){
    let arr1 = []
    for(let i=0;i<=arr.length-1; i++)
    {
        let count = 1
            for(let j=i+1;j<=arr.length-1;j++)
            {
                if(arr[i]==arr[j])
                {
                    count++
                }
                if(count>1){
                    console.log(arr[i]);
                }   
            }
            
       
    }
    
}
removeDuplicate(arr);

