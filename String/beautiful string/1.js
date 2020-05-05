


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.split('');
    let C = B.length;
    if ((B[0] == 'a' || B[0] == 'A') && (B[C-1]=='z' || B[C-1]=='Z' ) && (B[((C+1)/2)-1]=='m' || B[((C+1)/2)-1]=='M')) {
        console.log('1');
    }
    else {
        console.log('0');
    }
}
