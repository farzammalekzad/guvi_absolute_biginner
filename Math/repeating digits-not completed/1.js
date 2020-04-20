


function plus() {
    let A = document.getElementById('input1').value;
    let B = A.match(/\d/g);
    console.log(check(B));

}
function check(arr) {
    for(let i=0; i<arr.length; i++) {
        for (let j=i+1; j<arr.length; j++) {
            if (arr[i] === arr[j]) {
                return 'yes';
            }
        }
    }
    return 'no';

}
