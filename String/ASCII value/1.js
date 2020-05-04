


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.split('');
    let C = 0;
    for(let i=0; i<B.length; i++) {
        C = C + Number(B[i].charCodeAt(0));
    }
    console.log(C);

}
