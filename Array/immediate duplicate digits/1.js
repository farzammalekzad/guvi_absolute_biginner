


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.match(/\d/g);
    let C = B.length;
    for (let i=0; i<C; i++) {
        if (B[i] === B[i+1]) {
            B.splice(i,2);
            C = B.length;
            i = 0;
        }
    }
    console.log(B.toString().replace(/,/g,''));

}
