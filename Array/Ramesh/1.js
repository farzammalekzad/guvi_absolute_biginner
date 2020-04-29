


function plus() {
    let A = document.getElementById('mark').value;
    let B = document.getElementById('stu').value;
    let C = B.split(/\s+/g);
    let indx = [];
    for (let i=0; i<C.length; i++) {
        if (C[i] === A) {
            indx.push(i);
        }
    }
    if (indx.length === 0) {
        console.log('-1');
    }
    else {
        console.log(indx[0].toString().trim());
    }


}
