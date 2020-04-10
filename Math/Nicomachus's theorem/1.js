


function plus() {
    let A = document.getElementById('input1').value;
    let B = [];
    for(let i=1; i<=A; i++) {
        B[i-1] = ((Math.pow(i,2)  * Math.pow(i+1, 2)))/4;
    }
    console.log(B.toString().replace(/,/g, " "));
}

