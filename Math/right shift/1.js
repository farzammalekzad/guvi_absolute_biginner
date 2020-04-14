function plus() {
    const A = document.getElementById('input1').value;
    const B = document.getElementById('input2').value;
    let C = A.match(/\d/g);
    let D = C.length;
    for(let i=1; i<=B; i++) {
        C.unshift(C[D-1]);
        C.pop();
    }
    console.log(C);

}
