


function plus() {
    let A = document.getElementById('number').value;
    let B = A.split(/\s+/g);
    let obj = {};
    for (let i=0; i<B.length; i++) {
        if (obj[B[i].toString()] === undefined) {
            obj[B[i].toString()] = 1;
        }
        else {
            obj[B[i].toString()]++
        }
    }
    let arr = [];
    for (let key in obj) {
        arr.push({
           number: key,
           repeat: obj[key]
        });
    }
    for (let i=0; i<arr.length; i++) {
        if (arr[i].repeat == 1) {
            console.log(arr[i].number);
            break;
        }
    }
}
