// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

const findMax = function(arr, index=1, max){
    // if there's no max yet, set it to the first element
    if(max == null && arr.length){
        max = arr[0];
    }
    // the base case is when all indices have been searched
    if(index == arr.length){
        return max;
    }else{
        if(arr[index] >  max){
            max = arr[index];
        }
        return findMax(arr, index+1, max);
    }
}

const factorial = function(num){
    if (num == 1 || num == 0){
        return 1;
    } else {
        return  num * factorial(num - 1);
    }
}

const fibonacci = function(num){
    if(num == 1 || num == 2){ 
        return 1;
    }
    return fibonacci(num-1) + fibonacci(num-2);
}

const coinFlips = function(num){
    const results = [];
    console.log('Result: ',results);
    function rCoinFlips(stem=""){
        console.log('Stem: ', stem);
        if(stem.length ===  num){
            console.log('Results Stem before push: ', results, stem);
            results.push(stem);
            console.log('Results Stem 2 after push: ', results, stem);
        } else {

            rCoinFlips(stem+"H");
            rCoinFlips(stem+"T");
        }
    }
    rCoinFlips();
    return results;
}


const letterCombinations = function(arr){
    const results = [];
    function rLetterCombinations(stem, remainder){
        console.log('Stem: ', stem);
        console.log('Remainder: ', remainder);
        if(stem.length === arr.length){
            results.push(stem);
            return;
        }
        if(stem.length > 0){
            results.push(stem);
        }

        for(let i = 0; i < remainder.length; i++){
            const newRemainder  = remainder.slice(0,i).concat(remainder.slice(i+1));
            rLetterCombinations(stem+remainder[i], newRemainder)
        }
    };
    rLetterCombinations("", arr);
    return results;
}
