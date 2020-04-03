


function plus() {
    let A = document.getElementById('input1').value;
    let circule = 0;
    if (A<0) {
        alert('error');
    }
    else {
        let n = 2 * Math.PI * A;
        circule = n.toFixed(2);
        console.log(circule);
        alert('length of its circumference is : ' + circule);
    }

}


