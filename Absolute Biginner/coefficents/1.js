


function plus() {
    let A = Number(document.getElementById('input1').value);
    let B = Number(document.getElementById('input2').value);
    let C = Number(document.getElementById('input3').value);
    let rootPlus = ((-B) + Math.sqrt((B * B) - (4 * A * C)))/(2 * A);
    let rootMinus = ((-B) - Math.sqrt((B * B) - (4 * A * C)))/(2 * A);
    alert("Root 1 = " + rootPlus.toFixed(2) + " and Root 2 = " + rootMinus.toFixed(2));
    console.log("Root 1 = " + rootPlus.toFixed(2) + " and Root 2 = " + rootMinus.toFixed(2));
}


