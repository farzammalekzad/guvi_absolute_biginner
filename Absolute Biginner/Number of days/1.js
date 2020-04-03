


function plus() {
    let A = Number(document.getElementById('input1').value);
    if (A == 1 || A == 3 || A == 5 || A == 7 || A == 8 || A == 10 || A == 12) {
        alert('Days of this month are 31');
    }
    else if (A == 4 || A == 6 || A == 9 || A == 11) {
        alert('Days of this month are 30');
    }
    else if (A==2) {
        alert('Days of this month are 28');
    }
}


