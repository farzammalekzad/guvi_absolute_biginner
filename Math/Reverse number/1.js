function plus() {
    const A = document.getElementById('input1').value;
    let B = A.match(/\d/g);
    let C = B.length;
    let D = [];
    for (let i=1; i<=C; i++) {
        D[i-1] = B[C-i];
    }
    while (D[0]==0) {
        D.splice(0,1);
    }

    console.log(D.toString().replace(/,/g,''));
}

