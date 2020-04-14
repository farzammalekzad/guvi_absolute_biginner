


function plus() {
    let A = Number(document.getElementById('input1').value);
    let J = [];
    let K = [];
    let i = 0;
    let F = 0;
    let Z = 0;
    do{
        i++;
        F = Math.floor(A / 2);
        J.push(F);
        Z = A % 2;
        K.push(Z);
        A = F;
    }while ((J[i-1])>1);
    console.log('1'+ K.reverse().toString().replace(/,/g,''));
}
