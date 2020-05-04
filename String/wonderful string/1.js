


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.split('');
    let count = 0;
    let obj = {};
    for (let i=0; i<B.length; i++) {
        if (obj[B[i].toString()] === undefined) {
            obj[B[i].toString()] = 1;
            count++;
        }
        else {
            obj[B[i].toString()]++;
        }

    }
    if (count === 3) {
        console.log('Wonder');
    }
    else {
        console.log('-1');
    }
}
