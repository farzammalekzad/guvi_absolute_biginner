


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.split('');
    let C = B.length;
    let count = 0;
    if (B.length % 2 == 0) {
        for (let i=0; i<=(C)/2; i++) {
            if (B[i]===B[C-1-i]) {
                continue;
            }
            else {
                console.log('0');
                count++;
                break;
            }
        }
        if (count===0) {
            console.log('1');
        }
    }
    else {
        for (let i=0; i<=(C-1)/2; i++) {
            if (B[i]===B[C-1-i]) {
                continue;
            }
            else {
                console.log('0');
                count++;
                break;
            }
        }
        if (count===0) {
            console.log('1');
        }
    }
}
