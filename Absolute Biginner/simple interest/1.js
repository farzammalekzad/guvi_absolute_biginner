


function plus() {
    let A = Number(document.getElementById('input1').value);
    let B = Number(document.getElementById('input2').value);
    let C = Number(document.getElementById('input3').value);
    let i = (A * B * C)/100;
    let interest = i.toFixed(2);
    alert(interest);
}


