// event submit form
document.getElementById('form').addEventListener('submit', loadForm);
// function loadForm
function loadForm(e){
    e.preventDefault();
    // select value name and email
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
   if(name === '' || email === '' ){
        let msg = document.getElementById('error');
        msg.innerHTML='The fields is empty please enter all fields name and email';
        setTimeout(() => msg.remove(), 3000);
   }else{
        // create element li
       let li = document.createElement('li');
       //li create textContent
       let t = document.createTextNode(`${name} - ${email}`);
       li.appendChild(t);
       document.getElementById("ul").appendChild(li);
        // clear fields 
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
    
   }
}