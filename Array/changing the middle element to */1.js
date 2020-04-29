


function plus() {
    let A = document.getElementById('array').value;
    let B = A.split(/(?!$)/u);
    console.log(B);
    let C = Math.ceil((B.length)/2);
    if (B.length % 2 == 0) {
        B[C] = '*';
        B[C-1] = '*';
    }
    else {
        B[C-1] = '*';
    }
    console.log(B.toString().replace(/,/g , ''));
}
