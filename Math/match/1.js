


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.match(/\d/g);
    let C = B.length;
    let D = 0;
    for(let i=0; i<C ; i++ ) {
        D = D + Number(B[i]);
    }
    console.log(D);
}

