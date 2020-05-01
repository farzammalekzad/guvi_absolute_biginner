


function plus() {
    let A1 = document.getElementById('input1').value;
    let A = A1.split(/\s+/g);
    let B = document.getElementById('input2').value;
    let obj = {};
    for (let i=0; i<A.length; i++) {
        if (obj[A[i].toString()] === undefined) {
            obj[A[i].toString()] = 1;
        }
        else {
            obj[A[i].toString()]++;
        }

    }
    let arr =[];
    for (let key in obj) {
        arr.push({
            number: key,
            repeat: obj[key]
        });
    }
    let P = [];
    arr.map(function (x) {
        if (x.number == B ) {
            P.push((x.repeat)-1);
        }
        else {
            P.push('-1');
        }

    })
    P.sort((a,b) => b-a);
    console.log(P[0]);


}
