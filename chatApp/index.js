
let arr = [4,4,4,4,4,4, 6, 12,12,12,12,12,12,12,12,12,12, 3, 4, 5, 6,6,6,6, 7, 7, 7,1];
let freq  ={}
for(let n of arr){
    if(freq[n]){
        freq[n]++
    }
    else{
        freq[n]=1;
    }
}
let maxCount = 0;
let mostFrequent;
for(let n in arr){
    if(freq[n] > maxCount){
        maxCount = freq[n];
        mostFrequent = n
    }
}
console.log(freq)
console.log(mostFrequent);
