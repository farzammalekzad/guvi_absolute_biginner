


function plus() {
    let A = document.getElementById('input1').value;
    let C = document.getElementById('input2').value;
    let B = A.split(/\s+/g);
    let D = C.split(/\s+/g);
    let E = B.concat(D);
    E.sort((a,b) => (a-b));
    console.log(E.toString().replace(/,/g , " "));

}


