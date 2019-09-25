// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

// -----------------------------Examnier the object dom
// alert(1);
console.log('Hello');
console.log(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
document.all[10].textContent='Hello';
console.log(document.forms[0]);
console.log(document.links);
// -----------------------------------getElementById
var headerTitle=document.getElementById('header-title');
console.log(headerTitle);
console.log(headerTitle.innerHTML);
console.log(headerTitle.textContent);
headerTitle.innerHTML='<h3>Welcom Inner haha</h3>'
console.log(headerTitle.innerHTML);
headerTitle.style.borderBottom='3px #fff solid';

// ------------------------------------------getElementByClassName
//var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].innerHTML='Hello 2';
// items[1].style.fontWeight='bold';
// items[1].style.backgroundColor='yellow';
// //gives error
// //items.style.backgroundColor = 'yellow';

// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor='#f4f4f4';
// }
// GETELEMENT BY TAG NAMES 
// var li =document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].innerHTML='Hello 2';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='yellow';
// //gives error
// //items.style.backgroundColor = 'yellow';

// for(var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor='#f4f4f4';
// }

// ---------------------------query selector
var header=document.querySelector('#main-header');
header.style.borderBottom='4px solid #ccc';

var input = document.querySelector('input');
console.log(input);
input.value='Hello said';

var submit = document.querySelector('input[type="submit"]');
console.log(submit);
submit.value='SEND';

var item=document.querySelector('.list-group-item');
item.style.color='red';

var lastItem=document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';

// ------------------------------querySelectorAll identiques getElementByTagName
var titles=document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent='Hello';

var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');

for(var j=0; j < odd.length; j++){
    odd[j].style.backgroundColor= '#f4f4f4';
    even[j].style.backgroundColor= '#ccc';
}
// --------------------------------------------dom2-----------------------------------------------
// traversing the dom 
var itemList=document.querySelector('#items');
// parentNode 
console.log(itemList);
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);
// childNodes
console.log(itemList.childNodes);
console.log(itemList.childNodes[1]);
itemList.childNodes[1].style.backgroundColor='yellow';
// itemList.childNodes[1].innerHTML='Hello 1';
// firstChild
console.log(itemList.firstElementChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent= 'Hello 1';

// lastChild
// console.log(itemList.lastElementChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent= 'Hello 3';

// nextSibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);

// create element 

// create div
var newDiv= document.createElement('div');
// add class
newDiv.className='hello';
// add id
newDiv.id='hello1';
// add attr
newDiv.setAttribute('title', 'Title for Div');
// create textNode
var newDivText=document.createTextNode('Hello World');
// add texte to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1= document.querySelector('header h1');

console.log(newDiv);

console.log(container);
console.log(h1);

newDiv.style.fontSize='30px';
container.insertBefore(newDivText, h1);

// -------------------------------------------------dom 3--------------
// event 
var button = document.getElementById('button').addEventListener('click', buttonClick); //select le btn ensuite ajout d'écouteur d'evenement 

function buttonClick(e){ //function applé ausein de l'ecouteur d'evenement 
    console.log('On clicked');
    document.getElementById('header-title').textContent='Changed';
    document.querySelector('#main').style.backgroundColor='#f4f4f4';

    console.log(e);

    console.log(e.target);

    console.log(e.target.id);

    console.log(e.target.className);

    console.log(e.target.classList);

    var output=document.getElementById('output');
    output.innerHTML='<h3>'+e.target.id+'</h3>';

    console.log(e.type);

    // console.log(e.clientX);
    // console.log(e.clientY);

    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // console.log(e.altKey);
    // console.log(e.ctrKey);
    // console.log(e.shiftKey);
}

var button2=document.getElementById('button2');
button2.addEventListener('click', runEvent);
button2.addEventListener('dblclick', runEvent);
button2.addEventListener('mousedown', runEvent);
button2.addEventListener('mouseup', runEvent);

var box = document.getElementById('box');

box.addEventListener('mouseenter', runEvent);
box.addEventListener('mouseover', runEvent);
box.addEventListener('mouveleave', runEvent);
box.addEventListener('mouseover', runEvent);
box.addEventListener('mouseout', runEvent);
box.addEventListener('mousemove', runEvent);

var itemInput=document.querySelector('input[type="text"]');
console.log(itemInput);
var form=document.querySelector('form');
console.log(form);
itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keypress', runEvent);
// itemInput.addEventListener('keyup', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('paste', runEvent);

var select=document.querySelector('select');
select.addEventListener('change', runEvent);
select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e){

    e.preventDefault();

    console.log('Event Type: '+e.type);
    console.log(e.target.value);

    output.innerHTML='<h3>MouseX'+e.offsetX+'</h3><h3>MouseY'+e.offsetY+'</h3>';
    // box.style.backgroundColor="rgb("+e.offsetX+", "+e.offsetY+", 40)";
    document.body.style.backgroundColor="rgb("+e.offsetX+", "+e.offsetY+", 40)";
    console.log(e.target.value);

    output.innerHTML='<h3>'+e.target.value+'</h3>';
}