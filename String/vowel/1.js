


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.split('');
    let count = 0;
    B.map(function (x) {
        if (x=='a' || x=='u' || x=='e' || x=='o' || x=='i') {
            count++;
        }
    });
    if (count>0) {
        console.log('yes');
    }
    else {
        console.log('no');
    }
}
