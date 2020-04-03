


function plus() {
    let A;
    A = document.getElementById('input1').value;
    if (isNaN(A)) {
        alert('your input is wrong');
        return false;
    }
    else {
        let F = Number((A * 1.8) + 32)
        console.log(F);
        alert('temp is ' + F);
    }


}


