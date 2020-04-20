


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.split(/\s+/g);
    let obj = {};
    for (let i=0; i<B.length; i++) {
        if (obj[B[i].toString()] === undefined) {
            obj[B[i].toString()] = 1;
            }
        else {
            obj[B[i].toString()]++ ;
        }
    }
    let arr = [];
    for (let key in obj) {
        arr.push({
                number: key,
                repeat: obj[key]
        })
    }

    let last = [];
    for (let i=0; i<arr.length; i++) {
        last[i] = arr[i].number;
    }
    console.log(last.toString().replace(/,/g , " "));

}
