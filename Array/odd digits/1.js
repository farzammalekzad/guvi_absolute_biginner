


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.match(/\d/g);
    let arr = [];
    for (let i=0; i<B.length; i++) {
        if (B[i]%2 !== 0) {
            arr.push(B[i]);
        }
    }
    console.log(arr.toString().replace(/,/g , " "));
}
