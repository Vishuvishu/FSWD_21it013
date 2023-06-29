function hello(...numbers) {
    console.log("here is all nummber using rest " + numbers)


}

arr = [1, 2, 3, 4, 5, 6];
hello(arr);


function hello1(a, b, c) {
    console.log("here is using spread" + " " + a + " " + b + " " + c)
}
arr = [1, 2, 3]
hello1(...arr)