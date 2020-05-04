


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.split(/\s+/g);
    let C = B.filter(Number);
    let D = C.sort((a,b) => (b-a));
    let E = D[0].toString().replace('.' , '');
    console.log(E);


}
