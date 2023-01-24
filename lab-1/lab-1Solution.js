function questionOne() {
    let arr = [];
    for(let j = 1; j < 101; j++) {
        arr.push([j]);
    }

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            arr[i] = arr[i].toString().replace(arr[i], "FizzBuzz");
        } else if(arr[i] % 3 === 0) {
            arr[i] = arr[i].toString().replace(arr[i], "Fizz");
        } else if(arr[i] % 5 === 0){
            arr[i] = arr[i].toString().replace(arr[i], "Buzz");
        }
    }

    console.log("Q1: " + arr);
}
questionOne();

function questionTwo() {
    let sum = 0;
    for(let i = 1; i < 101; i++) {
        if(i % 2 === 0) {
            sum += i;
        }
    }

    console.log("Q2: " + sum);
}
questionTwo();

function questionThree(arr) {
    let num = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(num < arr[i]) {
            num = arr[i];
        }
    }

    return num;
}
console.log("Q3: " + questionThree([50,300,32,55,900,2,-1]));