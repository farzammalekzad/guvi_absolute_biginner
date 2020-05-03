


function plus() {
    let A = document.getElementById('majestic').value;
    let B = A.split(/\s+/g);
    let C = Math.max.apply(null,B);
    let D = Math.min.apply(null,B);
    console.log(C - D);
}