


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.split(/\s+/g);
    let arr = [];
    for (let i=0; i<(B.length) - 1; i++) {
        if (B[i] >= B[i+1]) {
            arr.push(B[i]);
        }
        else {
            arr.push(B[i+1]);
        }
    }
    console.log(arr.toString().replace(/,/g , " "));
}
