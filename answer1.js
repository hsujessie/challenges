//My solution
/*
function capitalize(sentence) {
    let arr = sentence.split(" ");
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        let firstLetter = arr[i].charAt(0);
        let upperFirstLetter = firstLetter.toUpperCase();

        newArr.push(arr[i].replace(firstLetter, upperFirstLetter));
    }

    let newSentence = "";
    for(let i = 0; i < newArr.length; i++) {
        newSentence += newArr[i] + " ";
    }

    return newSentence.trim();
}

console.log(capitalize('a short sentence'));
console.log(capitalize('a lazy fox'));
console.log(capitalize('look, it is working!'));
*/


//Teacher's solution
function capitalize(sentence) {
    let arr = sentence.split(" ");
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return arr.join(" ");
}

console.log(capitalize('a short sentence'));
console.log(capitalize('a lazy fox'));
console.log(capitalize('look, it is working!'));