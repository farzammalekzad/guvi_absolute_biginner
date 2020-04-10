


function plus() {
    let A = Number(document.getElementById('input1').value);
    let B = '';
    for(let i=1;i<4;i++){
        B = B + (A * i) + " ";
    }
    console.log(B.trimRight());
}


