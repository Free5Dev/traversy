# event button 
    document.getElementById('getText').addEventListener('click', getText);
    document.getElementById('getUsers').addEventListener('click', getUsers);
    document.getElementById('getPosts').addEventListener('click', getPosts);
    document.getElementById('addPost').addEventListener('submit', addPost);
# function getText
    function getText(){
### fetch('sample.txt')
### .then(function(res){
###   return res.text();
### })
### .then(function(data){
###   console.log(data);
### });
## c'est l'equivalent de XHR on lui passe l'url
      fetch('sample.txt')
## le type de data ici text
      .then((res) => res.text())
## renvoi le data et on l'affiche ausein du div#output
      .then((data) => {
        document.getElementById('output').innerHTML = data;
      })
## en cas d'erreur on renvoi l'erreur 
      .catch((err) => console.log(err))
    }
# function getUsers
    function getUsers(){
##    le lien du fichier json
      fetch('users.json')
## de type jon
      .then((res) => res.json())
## on renvoi le data 
      .then((data) => {
        let output = '<h2 class="mb-4">Users</h2>';
## on parcour avec la boucle forEach
        data.forEach(function(user){
          output += `
            <ul class="list-group mb-3">
              <li class="list-group-item">ID: ${user.id}</li>
              <li class="list-group-item">Name: ${user.name}</li>
              <li class="list-group-item">Email: ${user.email}</li>
            </ul>
          `;
        });
## on l'attach au sein du div#output
        document.getElementById('output').innerHTML = output;
      })
    }
# function getPosts 
    function getPosts(){
## l'url de l'api
      fetch('https://jsonplaceholder.typicode.com/posts')
## le type data json
      .then((res) => res.json())
## la data json 
      .then((data) => {
        let output = '<h2 class="mb-4">Posts</h2>';
## parcours toutes les data
        data.forEach(function(post){
          output += `
            <div class="card card-body mb-3">
              <h3>${post.title}</h3>
              <p>${post.body}</p>
            </div>
          `;
        });
## attach au sein de la div#output
        document.getElementById('output').innerHTML = output;
      })
    }
# function addPOST on the api
    function addPost(e){
## event par default non prise en compte 
      e.preventDefault();
## select value title et body
      let title = document.getElementById('title').value;
      let body = document.getElementById('body').value;
## url api 
      fetch('https://jsonplaceholder.typicode.com/posts', {
### method post
        method:'POST',
### headers type text json 
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-type':'application/json'
        },
### json stringify 
        body:JSON.stringify({title:title, body:body})
      })
## envoi data et affiche dans console le data
      .then((res) => res.json())
      .then((data) => console.log(data))
    }