


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.split(/(\d)/);
    let D = B.filter(Number);
    console.log(D);
    console.log(calcMax(D) - calcMin(D));
    

}
function calcMax(arr) {
    let X = arr[0]; // value of index 0
    let Y = 0; //index 0
    for (let i=1; i<arr.length; i++) {
        if (arr[i]>X) {
            X = arr[i];
            Y = i;
        }
    }
    return Y;
}
function calcMin(arr) {
    let Z = arr[0];
    let U = 0;
    for (let j=1; j<arr.length; j++) {
        if (arr[j]<Z) {
            Z = arr[j];
            U = j;
        }
    }
    return U;
}

