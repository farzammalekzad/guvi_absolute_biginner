


function plus() {
    let A = Number(document.getElementById('input1').value);
    if (A===1 || A===0) {
        alert('1');
    }
    else {
        for (let i=A-1; i>1; i--) {
            A = A * i;
        }
        alert(A);
    }
}
function whfu() {
    let A = Number(document.getElementById('input1').value);
    if (A===1 || A===0) {
        alert('1');
    }
    else {
        let i = A -1;
        while (i>1) {
            A = A * i;
            i--;
        }
        alert(A);
    }
}

