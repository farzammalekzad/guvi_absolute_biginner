


function plus() {
    let A = document.getElementById('array').value;
    let B = A.split(/\s+/g);
    let obj = {};
    for (let i = 0; i < B.length; i++) {
        if (obj[B[i].toString()] === undefined) {
            obj[B[i].toString()] = 1;
        } else {
            obj[B[i].toString()]++;
        }
    }

    let arr =[];
    for (let key in obj) {
        arr.push(
            {
                number: key,
                repeat: obj[key]
            }

        );
    }
    arr.sort(function (a,b) {
        return b.repeat - a.repeat;
    });
    console.log(arr[0].number);
}
