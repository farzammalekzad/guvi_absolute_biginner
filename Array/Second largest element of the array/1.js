


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.split(/\s+/g);
    let S = B.sort((a,b) => (b-a));
    console.log(S[1]);
}
