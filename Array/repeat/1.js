


function plus() {
    let B = document.getElementById('input1').value;
    let A = B.split(/\s+/g);
    let obj = {};
    for(let i=0; i<A.length; i++) {
        if(obj[A[i].toString()] === undefined) {
            obj[A[i].toString()] = 1;
        }
        else {
            obj[A[i].toString()]++;
        }
    }
    let arr = [];
    for(let key in obj) {
        arr.push({
            number: key,
            repeat: obj[key]
        });
    }
    arr.map(function(x) {
        if(x.repeat===2) {
            console.log(x.number);

        }
    })


}
