var arr=[10,11,12,15,16,17]
var element=11
var low=0;upp=arr.length-1
while(low<=upp){
     let mid=Math.floor((low+upp)/2)
    //case-1
    if(element>arr[mid]){
        low=mid+1
    }
    //case-2
    else if(element<arr[mid]){
        upp=mid-1
    }
    //case-3
    else if(element==arr[mid]){
        flag=1
        break
    }
}    
console.log(flag==0?"not found":"found");