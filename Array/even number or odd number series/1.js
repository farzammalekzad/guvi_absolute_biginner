


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.split(/\s+/g);
    let obj = {};
    let count = 0;
    let oddCount = 0;
    for (let i=0; i<B.length; i++) {
        if (obj[B[i].toString()] === undefined) {
            if (B[i] % 2 == 0) {
                obj[B[i].toString()] = 2;
                count++;
            }
            else {
                obj[B[i].toString()] = 1;
                oddCount++;
            }
        }

    }
    for (let key in obj) {
        if (count>1 && obj[key] == 1) {
            console.log(key);
        }
        else if (count===1 && obj[key] == 2) {
            console.log(key);
        }
        else if (count ===0 || oddCount===0) {
            console.log('-1');
            break;
        }
    }


}


