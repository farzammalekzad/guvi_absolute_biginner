


function plus() {
    let A = document.getElementById('array1').value;
    let B = document.getElementById('array2').value;
    let A1 = A.split(/\s+/g);
    let B1 = B.split(/\s+/g);
    let C = A1.concat(B1);
    let obj = {};
    for (let i=0; i<C.length; i++) {
        if (obj[C[i].toString()] === undefined) {
            obj[C[i].toString()] = 1;
        }
        else {
            obj[C[i].toString()]++;
        }
    }
    let arr = [];
    for (let key in obj) {
        arr.push({
            number: key,
            repeat: obj[key]
        })
    }
    arr.sort(function (a,b) {
            return b.repeat - a.repeat;
        }
    );
    if (arr[0].repeat == arr[1].repeat) {
        console.log('-1');
    }
    else {
        console.log(arr[0].number);

    }


    }
