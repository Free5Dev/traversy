// -----------------------------les basics
// alert('Bonjour tout le monde'); 
// console.log('Hello Console log');
// console.error('Console Error');
// console.warn('Console Warn');
// console.info('Console Info');
// console.debug('Message Debug');
// console.profile();

// ----------------------------var string, number, bool, dec
var name="said soumah", age=22, bool=true, dec=12.2;
// for string
console.log(name);
console.log(typeof name); //affiche le type de la variable
console.log(name.toUpperCase()); //convertion en majuscule
console.log(name.toLowerCase()); //convertion en minuscule
console.log("my name content: "+name.length+" lengths"); //la longueur 
console.log(`My name content ${name.length} lengths`); //affiche sous forme de templates
console.log("La lettre d se trouve à la : "+name.indexOf('d')+" positions"); //la position des caractères
console.log(name.substr(0, 4).toUpperCase());//on soustrait et converti en majuscule
console.log(name.split(' '));
name=33; //change le type de la variable
console.log(typeof name);
console.log(typeof parseInt(name)); //convertion de strinng en number

// for number
console.log(age);
console.log(typeof age);
console.log(typeof age.toString());//convert number to string
console.log(`My age is ${age} old`);

// for bool
console.log(bool);
console.log(typeof bool);

// for dec
console.log(dec);
console.log(typeof dec);
console.log(typeof parseFloat(dec));

// ----------------------array js peut contenir number, string, bool, etc ...
// let fruits= new Array();
let fruits = ['Orange', 'Banane', 'Pomme', true, 12.2];
console.log(fruits);
console.log(fruits.length);
fruits[5]='avocat';
console.log(fruits);
fruits.push('baba');
console.log(fruits);
fruits.unshift('premier');
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(fruits.indexOf('Pomme'));
console.log(Array.isArray('Pomme'));

// -----------------------------object js 
var person = {
    firstName: 'Said',
    lastName: 'Soumah',
    age: 27,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '64 Boulevard Stalingrad',
        city: 'Vitry-sur-seine',
        postal: 94400
    }
};

console.log(typeof person);
console.log(person);//affiche object
person.email="saidsoumah@gmail.com"; //ajout d'un element de l'object
console.log(person);
console.log(person.hobbies);
console.log(person.hobbies[2]); //affiche l'hobbie de l'object qui est un array
console.log(person.address);
console.log(person.address.street); //affiche object element element object 

// ---------------------------object list json
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true 
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: false 
    },
    {
        id: 3,
        text: 'Dentist App',
        isCompleted: true 
    },
];

console.log(todos); //list objects

console.log(todos[1].text);//affiche l'object 2 text

const todoJSON= JSON.stringify(todos);

console.log(todoJSON); //convert list objects in json

// ---------------------------------for 
for(var i = 0; i< 10; i++){
    console.log(`For Loop ${i}`);
}
// même chose avec while
var i=0;
while(i<10){
    console.log(`While Loop ${i}`);
    i++;
}
// for pour todos
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}
console.log('-----------------------------');
// même chose avec todo of todos
for(todo of todos){
    console.log(todo.text);
}

//même chose avec  forEach
todos.forEach(function(todo){
    console.log(todo.text);
});
// map
const todoText= todos.map(function(todo){
    return todo.text;
});
console.log(todoText);
// filter 
const isCompleted= todos.filter(function(todo){
    return todo.isCompleted===true; //on filter
}).map(function(todo){// ensuite on map
    return todo.text;
});
console.log(isCompleted);