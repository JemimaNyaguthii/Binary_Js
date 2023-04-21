// It finds the target value in a sorted array
// let num = [45,12,6,89,2,5]
// let target= 6
function binary(num,target){
    let left=0;
    let right=num.length-1;
    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if(num[middle]===target){
            return middle;
        }
        else if(num[middle]<target){
            left=middle+1;
        }
        else{
            right=middle-1;
        }
    }
    return null
}
let num=[2,5,6,12,45,89]
let target=6;
console.log(binary(num,target))


// Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
// let num = [45,12,6,89,2,5]
// let target = 6

function numbers(numb){
    if (numb.length<=1){
        return numb;
    }
    let middle=Math.floor(numb.length/2);
    let left=numb.slice(0,middle);
    let right=numb.slice(middle);
    return sortingArray(numbers(left),numbers(right));
}
function sortingArray(left,right){
    empty=[];
    while(left.length && right.length){
        if (left[0] < right[0]){
            empty.push(left.shift())
        }
        else{
            empty.push(right.shift())
        }

    }
    return[...empty,...left,...right]
}
let numb=[2,45,89,12,6];
console.log(numbers(numb));

 function find(integer,tarrget){
    let left=0;
    let right=integer.length-1;
    while(left<=right){
        let middle=Math.floor((left+right)/2)
        if(integer[middle]===tarrget){
            return middle;
        }
        else if(
            integer[middle]<tarrget){
                left=middle+1
            }
            else{
                right=middle-1
            }
        
    }
    return null

 }


  let integer=[ 2, 6, 12, 45, 89 ]
  let tarrget=6;
  console.log(find(integer,tarrget))

