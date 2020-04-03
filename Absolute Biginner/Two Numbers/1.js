/*
You are given Two Numbers, A and B. If C = A + B. Find C.

Note: Round off the output to a single decimal place.


Input Description:
You are provided with two numbers A and B.

Output Description:
Find the sum of the two numbers (A + B)

Sample Input :
1
1
Sample Output :
2
*/


function plus() {
    let A = 0;
    let B = 0;
    let C = 0;
    A=document.getElementById('input1').value;
    console.log(A);
    B=document.getElementById('input2').value;
    console.log(B);
    C = Number(A) + Number(B);
    console.log(C);
    alert(C);
}


