


function plus() {
    let A = Number(document.getElementById('input1').value);
    if (A == 0) {
        alert('Input is Zero')
    }
    else {


        let C = Math.round(A % 2);
        switch (C) {
            case 0:
                alert('Even');
                break;
            case 1:
                alert('Odd');
                break;
        }
    }
}


