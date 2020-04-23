


function plus() {
    let A = document.getElementById('input1').value;
    let B = Number(document.getElementById('cons').value);
    let C = A.split(/\s+/g);
    console.log(C);
    let E = [];
    for (let i=0; i<C.length; i++) {
        if (C[i+1] === undefined) {
            C.push(0);
            if (Number(C[i]) - Number(C[i+1]) > B || Number(C[i]) - Number(C[i+1]) < -B ) {
                E.push('1');
            }
            else {
                E.push('0');
            }
            break;
        }
        else {
            if (Number(C[i]) - Number(C[i+1]) > B || Number(C[i]) - Number(C[i+1]) < -B ) {
                E.push('1');
            }
            else {
                E.push('0');
            }
        }

    }
    console.log(E.toString().replace(/,/g , " ").trim());
}
