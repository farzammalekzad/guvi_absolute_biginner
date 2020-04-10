


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.split(/(\s+)/);
    let J = B.filter(Number);
    let K = J.sort();

    console.log(K[(K.length)-1]);


}
