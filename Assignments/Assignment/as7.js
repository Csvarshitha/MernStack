
function removeDuplicate(arr){
    let arr1 = arr
    for(let i=0;i<=arr1.lenght-1; i++)
    {
            for(let j=i;j<=arr1.lenght-1;j++)
            {
                if(arr1[j]==arr1[j+1])
                {
                    arr1[i]
                }
                    
            }
            console.log(arr1[i]);
            

        
       
    }
    
}

console.log(removeDuplicate([1,2,3,1,4,2,5]));