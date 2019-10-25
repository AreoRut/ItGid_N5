//document.querySelector('button').onclick = () => { }
/////////////////////////////////////////////////////////////
/*document.querySelector('button').onclick = myFunc;
function myFunc() {
}
////////////////////////////////////////////////////////////
document.querySelector('#button2').onclick = () => {
    console.log(document.querySelector('#i2').value);
    let myCheckBox = document.querySelector('#i2');
    console.log(myCheckBox.checked);
    if (myCheckBox.checked) {
        console.log("Нажат");
    } else {
        console.log("Не Нажат");
    }
}
*/
//for
//while

//for (let i = 0; i < 9; i = i + 1) {
//if (i == 4) break;
//console.log(i);
//console.log("******************");
//if (i == 4) break;
//}
/*
let div = document.querySelectorAll('.one');
//console.log(div);
//div.style.background = 'red';
for (let i = 0; i < div.length; i++) {
    //console.log(div[i]);
    div[i].style.background = 'grey';
    //div[i].onclick = two;
}
function two() {
    //console.log("This workt");
}
let b = document.getElementsByClassName('one');
let c = document.getElementsByTagName('div');
console.log(b);
console.log(c);
for (let i = 0; i < b.length; i++) {
    //b[i].style.border = '3px solid black';
    //c[i].
}*/

document.querySelector('button').onclick = () => {
    let r = document.querySelectorAll('input[type="radio"]');
    console.log(r);
    for (let i = 0; i < r.length; i++) {
        if (r[i].checked) {
            console.log(r[i].value);
        }
    }
}
let = ' ';
for (let i = 0; i < 9; i++) {
    if (i == 6) continue;
    out += i + ' ';
    //console.log(i);
    //if (i == 6) break;

}
document.querySelector('#out').innerHTML = out;

//#1-3
/*
let = ' ';
for (let i = 10; i > 0; i = i - 1) {
    out1 += i + ' ';
    console.log(i);
    //document.querySelector('#out1').innerHTML = out1;
}
document.querySelector('#out1').innerHTML = out1;
//#4
let = ' ';
for (i = 0; i < 10; i = i + 2) {
    out2 += i + ' ';
}
document.querySelector('#out2').innerHTML = out2;*/
//////////////////////////////////////////////////////////////////
document.querySelector('#but1').onclick = () => {
    console.log("Workt");
}
////////////////////////
//#5
/*
let = ' ';
for (let i = 22; i > 0; i = i - 3) {
    out3 += i + ' ';
    //console.log(i);
}
document.querySelector('#out3').innerHTML = out3;
*/
//////////////////////////////////////////////////////////////////////
//#7

let button2 = document.querySelector('#but2');
let in1 = document.querySelector('#in1');
let out5 = document.querySelector('#out5');
button2.onclick = () => {
    let num = in1.value;
    console.log(num);
    //console.log(num.length);
    for (i = num; i > 0; i = i - 1) {
        if (i == 0) break;
        out5 += i + ' ';
        //console.log(num);
        //console.log(i);
    }
    document.querySelector('#out5').innerHTML = out5;
}
//#11
let div = document.querySelectorAll('.two');

let b = document.getElementsByClassName('two');
let c = document.getElementsByTagName('div');
console.log(b);
//console.log(c);
let l = 0;
for (let i = 0; i < div.length; i++) {
    console.log(div[i]);
    div[i].style.background = 'grey';
    //div[i].onclick = two;
    console.log(i);
    l = div.length;
    console.log(l);
    le = b.length;
    console.log(le);
    //document.querySelector('#out6').innerHTML = l;
    //document.querySelector('#out6').innerHTML = c.length;
} document.querySelector('#out6').innerHTML = l;
//document.querySelector('#out6').innerHTML = b.length;

//#13