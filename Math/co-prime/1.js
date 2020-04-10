function plus() {
    const A = document.getElementById('input1').value;
    const B = document.getElementById('input2').value;
// barresiye sharte asli
    if (check(A, B) === 0) {
        console.log('1');
    } else {
        console.log('0');
    }

    //tabe mojaza
    function check(A, B) {
        let C =[];
        let D =[];
        if (A > B) {
            for (let i = 2; i < B; i++) {
                C[i - 2] = B % i;
                for (let j = i; j <= i; j++) {
                    D[j - 2] = A % j;
                    if (C[i - 2] === 0 && D[j - 2] === 0) {
                        return 0;
                    }

                }
            }
            return 1;
        } else {
            for (let i = 2; i < A; i++) {
                C[i - 2] = A % i;
                for (let j = i; j <= i; j++) {
                    D[j - 2] = B % j;
                    if (C[i - 2] === 0 && D[j - 2] === 0) {
                        return 0;
                    }

                }
            }
            return 1;
        }
    }
}


/*  //halghe aval ke ba on baghimande 2 moteghayer ro ba ham moghayese mikonim */
// yek eshkal tartibe adad bud ke dar sorat dorost nabudan tartib khuroji eshtebah midad.

