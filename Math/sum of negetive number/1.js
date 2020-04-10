function plus() {
    const A = document.getElementById('input1').value;
    let B = Number(document.getElementById('input2').value);
    let C = A.split(/\s+/g);
   let D =  C.filter(checkNegetive);
   let G = 0;
   for(let i=0; i<D.length; i++){
       G = G + Number(D[i]);
   }
   console.log(G);
}
function checkNegetive(C) {
    if (C<0) {
        return C;
    }
}
