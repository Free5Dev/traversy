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
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
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
// var header= document.querySelector('#main-header');
// console.log(header);
// header.style.border='4px solid #ccc';

// var input=document.querySelector('input');
// console.log(input);
// input.value='Hello World';

// var submit = document.querySelector('input[type="submit"]');
// console.log(submit);
// submit.value="SEND";

// var items = document.querySelector('.list-group-item');
// console.log(items);
// items.style.color='red';

// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='coral';


/**-------------------------QUERY SELECTOR ALL  -------------------------- */
// var titles= document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='Hola';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');


// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor='#f4f4f4';
//     even[i].style.backgroundColor='#ccc';
// }
/**---------------------------------------------------------------------------DOM PART 2-------------------------------------  -------------------------- */
/**-------------TRAVERSING THE DOM -------------------------- */
// var itemList = document.querySelector('#items');
// console.log(itemList);
// // ----------------------parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);

//-------------------- parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement);

// -------------childNodes
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

// // ------------------firstChildren
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// ------------------lastChildren
// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// ---------------------nextSibling
// console.log(itemList.nextSibling);
// -------------------nextElementSubling
// console.log(itemList.nextElementSibling);

// --------------previouSibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';

// createElement 
// ---------------------------------------------------create new div
// var newDiv= document.createElement('div');

// // add class
// newDiv.className='hello';
// // add id
// newDiv.id='hello1';
// // create textNode
// var newDivText=document.createTextNode('Hello World');

// // add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// newDiv.style.fontSize='30px';
// console.log(newDiv);
// container.insertBefore(newDiv, h1);


/**---------------------------------------------------------------------------DOM PART 3-------------------------------------  -------------------------- */
var button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(e){
    // console.log('button cliked');
    // document.getElementById('header-title').textContent = 'changed';
    // document.querySelector('#main').style.backgroundColor= '#f4f4f4';
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);

    // var output=document.getElementById('output');
    // output.innerHTML='<h3>'+e.target.id+'</h3>';
    // console.log(e.type);

    // console.log(e.clientX);
    // console.log(e.clientY);

    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);


}