


function plus() {
    let A = document.getElementById('array').value;
    let B = A.split(/\s+/g);
    let C = B.slice().sort((a,b) => (a-b));
    let count = 0;
    for (let i=0; i<B.length; i++) {
        if (B[i] == C[i]) {
            continue;
        }
        else {
            let P = B.indexOf(C[i]);
            [B[i],B[P]] = [B[P],B[i]];
            count++
        }
    }
    console.log(count);
}
