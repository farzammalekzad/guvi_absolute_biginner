


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.split(/\s+/g);
    let C =document.getElementById('input2').value;
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
        arr.push({
            number: key,
            repeat: obj[key]
        })
    }
    arr.sort((a,b) => (a.number - b.number));
    if (C>arr.length) {
        console.log('-1');
    }
    else {
        console.log(arr[C-1].number);

    }


}


