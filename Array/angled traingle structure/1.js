


function plus() {
    let A = Number(document.getElementById('number').value);
    let arr = [];
    for (let i=1; i<=A; i++) {
        if (i<=2) {
            for (let j=0; j<i; j++) {
                arr.push('1');
            }
            console.log(arr.toString().replace(/,/g , ' '));
        }
        else {
            for (let j=0; j<2; j++) {
                arr.push('1');
            }
            console.log(arr.toString().replace(/,/g , ' '))
        }
    }
}
