
// forEach
var arr = [1, 2, 3, 4, 5];

arr.forEach((a) => {
    console.log(a+2);
})

//map
var arr2 = arr.map( (a) => {
    return a *3
})
console.log(arr2);

//filter
var arr3 = arr.filter((a) => {
    if(a >=4){
        return true;
    }
    else{
        return false;
    }
})
console.log(arr3);

//find

var arr4 = arr.find((a) => {
    if(a ===90){
        return true;
    }
    else{
        return false;
    }
})
console.log(arr4);
//IndexOf
var arr5 = arr.indexOf(30);
console.log(arr5);