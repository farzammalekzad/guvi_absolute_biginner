


function plus() {
    let B = document.getElementById('input1').value;
    let A = B.split(/(?!$)/u);
    let obj = {};
    for (let i = 0; i < A.length; i++) {
        obj[i] = A[i];
    }

    let arr = [];
    for (let key in obj) {
        arr.push({
            index: key,
            char: obj[key]
        });
    }

   let oddArr = [];
   let evenArr = [];
    arr.map(function (x) {
        if (x.index % 2 == 0) {
            oddArr.push(x.char);
        }
        else {
            evenArr.push(x.char);
        }
   });
    console.log(oddArr.toString().replace(/,/g , '') + ' ' + evenArr.toString().replace(/,/g , '') );


}
