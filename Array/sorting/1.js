


function plus() {
    let A = document.getElementById('mark').value;
    let B = A.split(/\s+/g);
    let obj = {};
    for(let i=0; i<B.length; i+=2) {
        if (obj[B[i].toString()] === undefined) {
            obj[B[i].toString()] = B[i+1];
        }
    }
    let arr =[];
    for (let key in obj) {
        arr.push({
            name: key,
            salary: obj[key]
        })
    }
    arr.sort((a,b) => (a.salary - b.salary));
    let name = arr.map((x) => x.name);
    for (let i=0; i<name.length; i++) {
        console.log(name[i]);
    }

}
