


function plus() {
    let A = document.getElementById('rearranging').value;
    let B = A.split(/\s+/g);
    let map = new Map();
    for (let i=0; i<B.length; i++) {
        map.set(B[i],i);
    }
    let arr =[];
    map.forEach((a,b) =>
    {
        return arr.push(map.get(B[B[b]]));
    });
    console.log(arr.toString().replace(/,/g , " ").trim());
}
