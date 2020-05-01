


function plus() {
    let A = document.getElementById('array').value;
    let B = A.split(/\s+/g);
    let C = document.getElementById('number').value;
    for (let i=0; i<C; i++) {
        B.pop();
    }
    console.log(B.toString().replace(/,/g , ' '));
}
