//  Write a function to remove duplicate arrays from an array of arrays.
let arr = [1,2,1,3,2,4]
function removeDuplicate(arr){
    
    for(let i=0;i<=arr.length-1;i++)
        { 
            let count = 1;
            for( let j=i+1;j<=arr.length-1;i++){
                if(arr[i] == arr[j])
                {
                    count++
                }
            }
            if(count>1){
                console.log(arr[i]);
            }         

        }      
}

console.log(removeDuplicate(arr));

