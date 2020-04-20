


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.split(/\s+/g);
    console.log(Math.min.apply(null, B));
}
