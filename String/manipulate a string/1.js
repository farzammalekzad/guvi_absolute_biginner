


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.split('');
    let obj = {};
    for (let i=0; i<B.length; i++) {
        if (obj[B[i].toString()] === undefined) {
            obj[B[i].toString()] = 1;
        }
        else {
            obj[B[i].toString()]++;
        }
    }
    let arr = [];
    for (let key in obj) {
        if (obj[key] == 1) {
            arr.push(key);
        }
    }
    console.log(arr.toString().replace(/,/g , ''));
}
