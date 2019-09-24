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