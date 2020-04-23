


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.split(/\s+/g);
    let obj = {};
    let max = B.reduce((a,b) => Math.max(a,b));
    let min = B.reduce((a,b) => Math.min(a,b));
    let maxInd = 0;
    let minInd = 0;
    for (let i=0; i<B.length; i++) {
        obj[B[i].toString()] = i;
    }
    let arr = [];
    for (let key in obj) {
        if (key == max) {
            maxInd = obj[key];
        }
        else if (key == min) {
            minInd = obj[key];
        }
    }

    console.log(maxInd-minInd);

}


