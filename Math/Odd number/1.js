


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.match(/\d/g);
    let C = [];
    for(let i=0; i<B.length; i++) {
        if (Number(B[i])%2 !==0) {

            C.push(B[i]);
        }
    }
    if (C.length>0) {
        console.log(C.toString().replace(/,/g," "));
    }
    else {
        console.log('-1');
    }


}

