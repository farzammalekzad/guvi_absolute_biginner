


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.match(/\d/g);
    console.log((B.length==2)? 'Unsaturated': 'Saturated');


}

