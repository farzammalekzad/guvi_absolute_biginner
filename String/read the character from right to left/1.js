


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.split('');
    let C = B.length - 1;
    let arr = [];
    for(let i=C; i>=0; i--) {
        arr.push(B[i]);
    }
    let X = arr.toString().replace(/,/g , '');
    console.log(X.charAt(0).toUpperCase()+X.slice(1));

}
