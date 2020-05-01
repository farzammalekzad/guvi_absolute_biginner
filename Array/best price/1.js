


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
        (a,b) => (a.number-b.number)
    );
    console.log('Dealer'+arr[0].index);


}
