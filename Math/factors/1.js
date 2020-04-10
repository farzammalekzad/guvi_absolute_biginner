function plus() {
    const A = document.getElementById('input1').value;
    let B = [];
    for(let i=1;i<=A;i++) {
        if(A%i===0){
            B.push(i);
        }
    }
    console.log(B.toString().replace(/,/g,' '));
}
