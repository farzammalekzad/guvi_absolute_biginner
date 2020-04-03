


function plus() {
    let A = Number(document.getElementById('input1').value);
    if ((A % 4) === 0) {
        if ((A % 100) === 0) {
            alert('This year is not a leap year');
        }
        else {
            alert('this year is leap year');
        }
    }
    else {
        alert('this year is not leap year');
    }
}


