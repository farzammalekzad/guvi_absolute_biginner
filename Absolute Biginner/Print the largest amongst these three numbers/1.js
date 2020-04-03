


function plus() {
    let A = 0;
    let B = 0;
    let C = 0;
    A = Number (document.getElementById('input1').value);
    console.log(A);
    B = Number(document.getElementById('input2').value);
    console.log(B);
    C = Number(document.getElementById('input3').value);
    console.log(C);

    if (A-B>0) {
        if (A-C>0) {
            alert(A + " is biggest number");
        }
        else {
            alert(C + " is biggest number");
        }
    }
    else {
        if (B-C>0) {
            alert(B + " is biggest number");
        }
        else {
            alert(C + " is biggest number");
        }
    }

}


