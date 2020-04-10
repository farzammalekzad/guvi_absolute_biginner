function plus() {
    const A = Number(document.getElementById('input1').value);
    const B = Number(document.getElementById('input2').value);
    let D = 0;
    for (let i=A; i<=B; i++ ){
        if(i===1) {
            D++;
        }
        for (let j=2; j<i; j++) {
            if(i===2) {
                break;
            }
            else if (i%j===0){
                D++;
                break;
            }
        }
    }
    console.log((B-A+1) - D);

    }
