function plus() {
    let A = document.getElementById('input1').value;
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

    arr.sort(
        function (a,b) {
            if (a.repeat===b.repeat) {
                if (a.number>b.number) {
                    return -1
                }
                else return 1;
            }
            else if (a.repeat<b.repeat) return -1;
            else if (a.repeat>b.repeat) return 1;
        }

    );
    let least =[];
    least.push(arr[0].number);
        for (let j=1; j<arr.length; j++ ) {
            if (arr[0].repeat === arr[j].repeat) {
                least.push(arr[j].number);
            }
        }
        console.log(least.toString().replace(/,/g , " "));


}
/*
//tedad tekrar eleman ha ra be tartib araye asli midehad
function equ(arr) {
    let count = [];
    let x = 0;
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if (arr[i] == arr[j]) {
                x++;
            }
        }
        count[i] = x;
        x = 0;
    }
    return count;
}
/*
//bozorgtaring index araye ra midehad
function ind(arr) {
   return arr.indexOf(Math.min.apply(null,arr));
}
*/
