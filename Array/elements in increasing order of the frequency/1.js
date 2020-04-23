


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
                prop: key,
                freq: obj[key]
            }
        )
    }
    arr.sort(
        (a,b) => (a.freq - b.freq)
    );
    let arrFi = [];
    for(let i=0; i<arr.length; i++) {
        arrFi.push(arr[i].prop);
    }
    console.log(arr);
    console.log(arrFi.toString().replace(/,/g , " ").trim());
}
