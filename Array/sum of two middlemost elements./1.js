


function plus() {
    let A = document.getElementById('mark').value;
    let A1 = A.split(/\s+/g);
    let B = document.getElementById('mark2').value;
    let B1 = B.split(/\s+/g);
    let C = A1.concat(B1);
    C.sort((a,b) => (a-b));
    let D = C.length;
    let mid = [];
    mid = C.slice(((D/2)-1),((D/2)+1));
    console.log(mid.reduce((a,b) => (Number(a)+Number(b))));

}
