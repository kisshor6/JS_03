// alert("error")
// console.log("hello to my page");
// console.warn("warning of javascript");
// console.clear();
// console.assert(4 ==(2+2));
// document.write("this is the code by javascript")

let num1 = 23;
let num2 = 37;
// console.log(num1 + num2);

var marks = {
    kisshor : 30,
    hatti : 40,
    rangila : 70,
    mijju : 80
}
// console.log(marks);

let o1 = true;
let o2 = false;
// console.log(o1, o2)

// if the value of object is not given then it execute undefined

let kisshor;
// console.log(kisshor);

/*
there are two types of data types in javascript they are ;
1.primitive data type: undefined, null, number, string, symbol, boolean
2.reference data type: arrays and object
*/

/*var arr = [2, 4, 6, 5, 'what']
console.log(arr)*/

// arithmetic operators

let x = 100;
let y = 20;
// console.log("the result of (x + y) is",x+y);
// console.log("the result of (x - y) is",x-y);
// console.log("the result of (x * y) is",x*y);
// console.log("the result of (x / y) is",x/y);

// assigment operators

var m = 78;
var n = m;
n += 2;
n -= 2;
n *= 2;
n /= 2;
// console.log(n)

// comparison operator
var w = 45;
var z = 5;
// console.log(w == z);
// console.log(w <= z);
// console.log(w >= z);
// console.log(w < z);
// console.log(w > z);

// logical operators

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);
console.log(!false);
console.log(!true);

// function in js

function bag(a, b){
    return (a+b)/2;
}
k = bag(45, 55);
l = bag(23, 33);
m = bag(12, 90)
// console.log(k, l, m);

// conditional statement

let age = 18;

if(age >= 18){
    console.log("you are matured")
}
else{
    console.log("you are not matured")
}

// for loops in js

/*var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}
arr.forEach(function(element){
    console.log(element);
    });*/

// while loop in javascript

/*let arr = [1,2,3,4,5,6,7,8,9];
let j=0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}*/

// do loop in javascript

/*let arr = [1,2,3,4,5,6,7,8,9];
let j=0;
do{
    console.log(arr[j]);
    j++;
}while(j<arr.length);*/

// methods using in javascript

let arr = ['none','kisshor','hatta',89,8.4];
// console.log(arr.length);
arr.pop();
arr.push("bingo");
arr.shift();
arr.unshift("start");
// console.log(arr);

// string methods in javascript

let mystring = "this is the first code of javascript and it is very reliable code";
// console.log(mystring.length);
// console.log(mystring.indexOf("code"));
// console.log(mystring.lastIndexOf("code"));
// console.log(mystring.slice(0,23));
// console.log(mystring.replace("first", "starting"));
// or
d = mystring.replace('code','program');
// console.log(d)

// time in javascript

let mydate = new Date();
// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());

// document manipualtion

let q = document.getElementById("asdf");
// console.log(q);

let elemb = document.getElementsByClassName('container');
// console.log(elemb[0].innerHTML);
// console.log(elemb[0].innerText);
// elemb[0].style.background = 'red';
// console.log(elemb);
// elemb[0].classList.add("klx");

data = document.getElementsByTagName("div");
/*console.log(data);

createdElement = document.createElement('p');
createdElement.innerText = "this is the name of javascipt"
data[0].appendChild(createdElement);

createdElement2 = document.createElement('b');
createdElement2.innerText = "this is the name of bold javascipt"
data[0].replaceChild(createdElement2, createdElement);*/


window.onload = function clicked(){
    // console.log("the page was reloaded")
}
function clicked(){
    // console.log("the button was clicked")
}

firstcontainer.addEventListener('click', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b>document.queryselector program is running</b>"
    // console.log("it is already clicked")
})


// firstcontainer.addEventListener('mouseover', function(){
//     console.log("mouse is over the container")
// })


// firstcontainer.addEventListener('mouseout', function(){
//     console.log("mouse is out of page")
// })


let yz = document.querySelectorAll('.container')[1].innerHTML
firstcontainer.addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[1].innerHTML = yz
    // console.log("mouse is down the container")
})

firstcontainer.addEventListener('mouseup', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b>document.queryselector program is running</b>"
    // console.log("mouse is up of the container")
})

// arrow function

/*function plus(a,b){
    console.log(a+b);
}

plus = (a,b)=>{
    console.log(a+b);
}*/

// timeout and setInterval

horse = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b>timeout is running</b>"
    console.log("this is timeout ")
}
// setTimeout(horse, 2000);
// use clearInterval/clearTimeout to clear/stop setInterval/setTimeout 
// a = setInterval(horse, 5000);

// localStorage in js

// localStorage.setItem('name','kisshor')
// localStorage
// localStorage.getItem('name')

// JSON
// obj = {name: "kisshor", length: 1}
// js = JSON.stringify(obj);
// console.log(js);
// console.log(typeof js);
// parsed = JSON.parse(`{"name": "kisshor", "length": 1}`)
// console.log(parsed);

// template literals - backstick

/*x = 45;
console.log(`the biggest odd number is ${x}`)*/



