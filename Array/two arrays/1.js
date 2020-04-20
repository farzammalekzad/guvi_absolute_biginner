


function plus() {
    let A = document.getElementById('input1').value;
    let B = document.getElementById('input2').value;
    let C = A.split(/\s+/g);
    let D = B.split(/\s+/g);
    C.sort(
        function (a, b) {
            return a-b;
        }
    );
    D.sort(
        function (a, b) {
            return b-a;
        }
    )
    let F = C.toString().replace(/,/g , ' ');
    let G = D.toString().replace(/,/g , ' ');
    console.log(F +' '+ G);

}
