function plus() {
    const A = document.getElementById('input1').value;
    const B = /[aeoiu]/gi;
    let C = A.match(B).toString();
    let D = 0;
    for (let i=0; i<C.length; i++) {
        D= D + C.charCodeAt(i);
    }
    console.log(D%8===0?'1':'0');
}
