


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.split(/\s+/g);
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
        arr.push(
            {
             key: key,
             number: obj[key]
            }
        )
    }
    let P = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i].number > 1) {
            P.push(arr[i].key);
        }
    }
    console.log(P.toString().replace(/,/g , " "));
}
