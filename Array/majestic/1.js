


function plus() {
    let A = document.getElementById('majestic').value;
    let B = A.split(/\s+/g);
    let B2 = B.slice(0,3);
    let B3 = B.slice(-3);
    let C2 = B2.reduce((a,b) => (Number(a)+Number(b)));
    let C3 = B3.reduce((a,b) => (Number(a)+Number(b)));
    if (C2 === C3) {
        console.log('1');
    }
    else {
        console.log('0');
    }
}
