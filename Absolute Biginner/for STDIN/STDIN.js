/*
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});
let lines = [];
inp.on("line", (data) => {

    lines.push(data);
});
inp.on('close', () => {


       codes writes HERE

    console.log(lines[0]);
});


inp.on('close', () => {
    let A = lines[0];
    let B = lines[1];
  	let C = lines[2];
 	let rootPlus = ((-B) + Math.sqrt((B * B) - (4 * A * C)))/(2 * A);
    let rootMinus = ((-B) - Math.sqrt((B * B) - (4 * A * C)))/(2 * A);
    console.log(rootPlus.toFixed(2));
 	console.log(rootMinus.toFixed(2));
});




const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let lines = [];
inp.on("line", (data) => {
  lines = data;
  console.log(lines[0]);
});

last accomplish ---------

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let lines = [];
inp.on("line", (data) => {
  lines = data;
  let stringArray = lines.split(/(\s+)/);
	console.log(stringArray);
});


Example

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let lines = [];
inp.on("line", (data) => {
  lines = data;
  let stringArray = lines.split(/(\s+)/);
  let A = stringArray[0];
  let B = stringArray[2];

});

*/

/*  baraye ham khati ham satri

const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});
let lines = [];
inp.on("line", (data) => {

    lines.push(data);
});
inp.on('close', () => {



    console.log(lines[0]);
    let stringArray = lines[1].split(/(\s+)/);
  let A = stringArray[0];
  let B = stringArray[2];
    console.log(stringArray[2]);
});
-------------------

const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});
let lines = [];
inp.on("line", (data) => {

    lines.push(data);
});
inp.on('close', () => {

  let B = lines[0].split("");

   let C = lines[1].match(/\d/g);
    let D = C.length;
    for(let i=1; i<=B[2]; i++) {
        C.unshift(C[D-1]);
        C.pop();

    }
    console.log(C.toString().replace(/,/g , " "));
});
 */

