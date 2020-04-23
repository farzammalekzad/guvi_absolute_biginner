


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.split(/\s+/g);
    let C = B.reduce(Myredu,0);

    if(C % 2===0 && C % 3===0 && C%5===0) {
        console.log('1');
    }
    else {
        console.log('0');
    }
    function Myredu(total,num) {
        return parseInt(total) + parseInt(num);
    }
}
