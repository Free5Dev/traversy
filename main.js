// les variables et leurs types en js
let name ="said";
var age=28;
let bool =true, double =22.5;
//concatenation
console.log('Bonjour Mr.'+name+' , vous avez : '+age+' ans');
// templates string
console.log(`Bonjour Mr. ${name} , vous avez ${age} ans `);
// typeof 
console.log(typeof bool);
// majuscule, length, substr
console.log('Bonjour Mr.'+name.toUpperCase()+'');
console.log(name.length);
let phrase = "Salut tout le monde";
console.log(phrase.substr(0, 5));
console.log(phrase.split(' '));
// les tableaux en js
let fruits = [12, "Alain", true, 10.5];
// affiche le array
console.log(fruits);
// ajoute un element à l'array en dernier
fruits.push('Pomme');
console.log(fruits);
// ajout un element au tableau au premier rang
fruits.unshift('Premier');
console.log(fruits);
// retire le dernier element du tableau
fruits.pop();

console.log(fruits);
// affiche le premier element element au tableau
console.log(fruits[0]);
// verifie si il s'agit bien d'un element de tableau 
console.log(Array.isArray(fruits));

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
console.log('-------------------------');
fruits.forEach((i) => {
    console.log(i);
});

// les object en json
let person = {
    firstName: "Free",
    lastName: "Dev",
    age: 28, 
    hobbies: ["dev", "voyage", "music"],
    address: {
        city: "Vitry-Sur-Seine",
        cp: 94400,
        vx: "64 Bd Stalingrad"
    }
};
// affiche l'object
console.log(person);
// affiche un element de l'object
console.log(person.hobbies);
// parcour element tableau de l'object
person['hobbies'].forEach((i) => {
    console.log(i);
});
// affiche element de l'object object
console.log(person.address);
// affiche element element object element
console.log(person.address.vx+" "+person.address.cp);
// array object 
let todos = [
    {
        id: 1, 
        name: "Name One",
        isCompleted: true 
    },
    {
        id: 2, 
        name: "Name Two",
        isCompleted: false 
    },
    {
        id: 3, 
        name: "Name Three",
        isCompleted: true 
    },
];
// affiche l'array object 
console.log(todos);
// parcours l'array object avec for
for(let i = 0; i < todos.length; i++){
    console.log(todos[i]);
    console.log(todos[i].name);
}
// parcours l'array object with foreach
todos.forEach((todo) => {
    console.log(todo.name);
});
// parcours l'array object width map
let todoMap = todos.map((todo) => {
    return todo.name;
});
// parcours l'array object width filter
console.log(todoMap);
let todoFilter = todos.filter((todo) => {
    return todo.isCompleted == true;
});
console.log(todoFilter);
// callback todoMapFilter
let todoMapFilter = todos.filter((todo) => {
    return todo.isCompleted == true;
}).map((todo) => {
    return todo.name;
});

console.log(todoMapFilter);
// function object 
function Humain(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = new Date(age);
    
}

Humain.prototype.getYer= function(){
    return this.age.getFullYear();
}
Humain.prototype.fullName= function() {
    console.log(`${this.firstName} ${this.lastName}`);
}
// instatiation a methode object
let humain = new Humain("FreeZy", "DevWeb", '11-22-1991');
console.log(humain);
console.log(typeof humain);
// access object attribute
console.log(`Bonjour Mr. ${humain.firstName} ${humain.lastName} vous avez ${humain.age.getFullYear()}`);

humain.fullName();

console.log(humain.getYer());   

class Mikhi {

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = new Date(age);
    }
    getYer= function(){
        console.log(this.age.getFullYear());
    }
    fullName= function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
let mikhi = new Humain("FreeZy", "DevWeb", '11-22-1991');

console.log(mikhi);

console.log(mikhi.getYer());
