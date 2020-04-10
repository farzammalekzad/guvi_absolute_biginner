


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.match(/\d/g);
    let C = B[(B.length)-1];
    let D = 10 - C;
    console.log(Number(A)+Number(D));
}

