/*---------------------------- examiner the document object--------------------- */
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent='Hello';
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

/**-------------------------GET ELEMENTS BY ID -------------------------- */
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
// headerTitle.textContent='Hello';
// console.log(headerTitle.textContent);
// headerTitle.innerText='Holla';
// console.log(headerTitle.innerText);
// console.log(headerTitle.textContent); //recupere même le text avec diplay:none;
// console.log(headerTitle.innerText);
// headerTitle.innerHTML='<h3>Welcom bro</h3>';
// console.log(headerTitle);

/**-------------------------GET ELEMENTS BY CLASS NAME -------------------------- */
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent='Hello 2';
// items[1].style.fontWeight='bold';
// items[1].style.backgroundColor='yellow';
// errors
// items.style.backgroundColor='#f4f4f4';

// for(var i=0; i< items.length; i++){
//     if(items[i]==items[1]){
//         items[i].style.backgroundColor='yellow';

//     }else{
//         items[i].style.backgroundColor='#f4f4f4';
//     }
// }

/**-------------------------GET ELEMENTS BY TAG NAME -------------------------- */
// var li=document.getElementsByTagName('li');
// console.log(li);
// li[1].textContent='Hello 2';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='yellow';
// // errors
// // li.style.backgroundColor='#f4f4f4';

// for(var i=0; i< li.length; i++){
//     if(li[i]==li[1]){
//         li[i].style.backgroundColor='yellow';

//     }else{
//         li[i].style.backgroundColor='#f4f4f4';
//     }
// }

/**-------------------------QUERY SELECTOR  -------------------------- */
var header= document.querySelector('#main-header');
console.log(header);
header.style.border='4px solid #ccc';

var input=document.querySelector('input');
console.log(input);
input.value='Hello World';

var submit = document.querySelector('input[type="submit"]');
console.log(submit);
submit.value="SEND";

var items = document.querySelector('.list-group-item');
console.log(items);
items.style.color='red';

var lastItem=document.querySelector('.list-group-item:last-child');
lastItem.style.color='blue';

var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color='coral';


/**-------------------------QUERY SELECTOR ALL  -------------------------- */
var titles= document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='Hola';

var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');


for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor='#f4f4f4';
    even[i].style.backgroundColor='#ccc';
}
