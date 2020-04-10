


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.match(/\d/g);
    let C = 0;
    let D = 1;
    for(let i=0; i<B.length ; i++) {
        C = C + Number(B[i]);
        D = D * Number(B[i]);
    }
    console.log((C + D == A)? 'Great': 'no');


}

