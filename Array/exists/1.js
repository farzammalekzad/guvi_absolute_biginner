


function plus() {
    let A = document.getElementById('array').value;
    let B = document.getElementById('number').value;
    let C = A.split(/\s+/g);
    let D = 0;
    for (let i=0; i<A.length; i++) {
        if (C[i] == B) {
            D = 1;
            break;
        }
        else {
            D = -1;
        }
    }
    if (D === 1) {
        console.log('yes');
    }
    else {
        console.log('no');
    }
}
