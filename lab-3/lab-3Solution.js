function checkNum(num) {
    if(num > 5) {
        console.log("x is greater than 5");
    } else {
        console.log("x is not greater than 5");
    }
}
let x = 10;
checkNum(x);

function checkStrLen(str) {
    if(str.length > 5) {
        console.log("The name is longer than 5 characters");
    } else {
        console.log("The name is 5 characters or less");
    }
}
checkStrLen("Hi!");

function checkAge(age) {
    if(age > 19 && age < 66) {
        console.log("You are an adult");
    } else {
        console.log("You are not an adult");
    }
}
checkAge(65);

function multiNum(num1, num2) {
    return num1 * num2;
}
let result = multiNum(4, 5);
console.log(result);

function greet(name) {
    return "Hello, [" + name + "]!";
}
let greeting = greet("John");
console.log(greeting);

function loopArr(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
let numbers1 = [3,66,45,20,9,2];
loopArr(numbers1);

function testWhile() {
    let counter = 0;

    while(counter < 10) {
        console.log(counter);
        counter++;
    }
}
testWhile();

function sumNums(arr) {
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    console.log("sum = " + sum);
}
let numbers2 = [1,2,3];
sumNums(numbers2);

function findMaxNum(arr) {
    let i = 0;
    let maxNum = arr[0];

    while(i < arr.length) {
        if(maxNum < arr[i]) {
            maxNum = arr[i];
        } else {
            i++;
        }
    }

    console.log(maxNum);
}
let numbers3 = [1,2,903,32,12,76,824];
findMaxNum(numbers3);

function reverseStr(str) {
    let splitedStr = str.split("");

    return splitedStr.reverse().join("");
}
let reversedString = reverseStr("hello");
console.log(reversedString);