function countTrue(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i ++) {
        if(arr[i]) {
            count++;
        }
    }

    console.log(count);
}

countTrue([true, false, false, true, false]);
countTrue([false, false, false, false]);
countTrue([]);