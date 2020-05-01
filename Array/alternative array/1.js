


function plus() {
    let A = document.getElementById('array').value;
    let B = A.split(/\s+/g);
    let ans = [];

    B.sort(function(a, b) {
        return a - b;
    })

//For Even length
    if (B.length % 2 == 0) {
        for (let i = 0; i < B.length / 2; i++) {
            ans.push(B[B.length - 1 - i]);
            ans.push(B[i]);
        }
    }
//For Odd length
    else {
        ans.push(B[B.length - 1])
        B.pop();
        for (let i = 0; i < B.length / 2; i++) {
            ans.push(B[i]);

            ans.push(B[B.length - 1 - i]);
        }
    }
    console.log(ans);




}
