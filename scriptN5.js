//document.querySelector('button').onclick = () => { }
/*document.querySelector('button').onclick = myFunc;
function myFunc() {

}*/
document.querySelector('#button1').onclick = function () {
    console.log(document.querySelector('#one').value);
    //style
    document.querySelector('#button1').style.backgroundColor =
        document.querySelector('#one').value;//--можно вынести в переменную.

}
document.querySelector('#one').oninput = () => {// функция работы с бегунком
    console.log(document.querySelector('#one').value);
    let r = document.querySelector('#one').value
    document.querySelector('span').innerHTML = r;
}
///////////////////////////////////////
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
////////////////////////////
document.querySelector('#button3').onclick = (event) => {//функция применения Ajax
    event.preventDefault();
    // let text = document.querySelector('#two');
    //console.log(text.value);
    //text.value = 'one';
    let form = document.querySelector('form');
    console.log(form);
    console.log(form.elements.n1.value);
    console.log(form.elements.two.value);
    console.log(form.elements.n2.value);
    console.log(form.elements.three.value);
}
//////////#1
document.querySelector('#button4').onclick = () => {
    console.log("You number#1");
    alert("You number#1");
}
////#2
document.querySelector('#button5').onclick = () => {
    let inbut = document.querySelector('#inBut').value;
    console.log(inbut);
    out5.innerHTML += inbut;
}
//////#2.1
document.querySelector('#inBut2').onclick = () => {   //input type="button"
    let inBut2 = document.querySelector('#inBut2').value;
    console.log(inBut2);
    out6.innerHTML = "Number #2";

}
//#3
function klik(i) {
    document.getElementById(i).style.visibility = 'visible';
}

document.querySelector('#thumb1').onclick = () => {
    console.log("Number #3");
    alert("Number #3");

}
//#4
document.querySelector('#checkbut').onclick = () => {
    let chkb = document.querySelector('#ch1');
    console.log(document.querySelector('#ch1').value);
    console.log(chkb.checked);
    if (chkb.checked) {
        console.log("Select checkbox");
    } else {
        console.log("Select not checkbox");
    }

}
//#5

document.querySelector('#checkbut').onclick = () => {
    let chkb = document.querySelector('#ch1');
    console.log(document.querySelector('#ch1').value);
    console.log(chkb.checked);
    if (chkb.checked) {
        console.log("Select checkbox");
    } else {
        console.log("Select not checkbox");
    }

}


//#6
document.querySelector('#but2').onclick = () => {//hidden
    let inButt2 = document.querySelector('#inbut2').value;
    console.log("Value = " + inButt2);
}
//#7

document.querySelector('#but3').onclick = () => {

    var inBut3 = document.querySelector('#inbut3').value;
    if (inBut3.length >= 11) {
        alert("Your password:" + inBut3);
    } else {
        //alert(inbut3);
        console.log("Very short password");
    }
}

//#8
document.querySelector('#but4').onclick = () => {

}

document.querySelector('#but4').onclick = () => {
    //var number = document.getElementById("member").value;
    let contaner = document.getElementById('#contaner');
    let input = document.createElement('input');
    input.id = 'intext';
    input.type = 'text';
    input.name = 'valuer';
    input.title = 'Enter that';
    document.body.appendChild(input);

    let button6 = document.createElement('button');
    button6.id = 'but6';
    button6.title = 'Press that';
    button6.innerHTML = "CLICK ME";
    document.body.appendChild(button6);
    document.querySelector('#but6').onclick = () => {
        alert(document.querySelector('#intext').value);

    }

}

//#9

document.querySelector('#but5').onclick = () => {
    console.log(document.querySelector('#inbut5').value);
    let radioInput = document.querySelector('#inbut5');
    console.log(radioInput.checked);
    if (radioInput.checked) {
        alert("RadioButton pressed");
    } else {
        alert("RadioButton not pressed");
    }

}
