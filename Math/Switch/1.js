


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.match(/\d/g);
    let C = B.length;
    let temp = 0;
    for(let i=0; i<C; i+=2) {
        temp = B[i];
        B[i] = B[i+1];
        B[i+1] = temp;
    }
    let H = B.toString().replace(/,/g,' ')
    console.log(H.replace("  ",' '));

}
