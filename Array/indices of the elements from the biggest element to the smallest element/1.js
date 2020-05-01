


function plus() {
    let B = document.getElementById('input1').value;
    let A = B.split(/\s+/g);
    let obj = {};
    for(let i=0; i<A.length; i++) {
        if(obj[A[i].toString()] === undefined) {
            obj[A[i].toString()] = i;
        }
    }
    let arr = [];
    for(let key in obj) {
        arr.push({
            number: key,
            index: obj[key]
        });
    }
    arr.sort(
        (a,b) => (b.number-a.number)
    );
    let arrind = arr.map((x) => (x.index));
    console.log(arrind.toString().replace(/,/g , ' '));


}
