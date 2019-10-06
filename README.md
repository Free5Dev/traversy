# ----------------------------AJAX 1 ------------------------------------
## create event listener
document.getElementById('button').addEventListener('click', loadText);

### function loadText
function loadText(){
    // console.log('cliked');
     create XHR object
    var xhr = new XMLHttpRequest();
### open url, type, file synx
    xhr.open('GET', 'sample.txt', true)
    // console readyState
    // console.log('READYSTATE:'+xhr.readyState);
    // for onload
    // xhr.onload=function(){
    //     if(xhr.status==200){
    //         console.log(this.responseText);
    //     }
    // }
### xhr.onprogress
    xhr.onprogress=function(){
        console.log('READYSTATE:'+xhr.readyState);
    }
### xhr.onerror
    xhr.onerror=function(){
        console.log('Request Error');
    }
### for onReadyChange
    xhr.onreadystatechange=function(){
    if(xhr.readyState == 4 && xhr.status == 200){
    console.log('READYSTATE:'+xhr.readyState);
    console.log(this.responseText);
    document.getElementById('text').innerHTML=this.responseText;
    }else if (this.status==404){
        document.getElementById('text').innerHtml='Not Found';
    }
    }
### send request
xhr.send();
# ----------------------------AJAX 2 ------------------------------------

# create event user
document.getElementById('buttonUser').addEventListener('click', loadUser);
document.getElementById('buttonUsers').addEventListener('click', loadUsers);
# object XMLHttpRequest
var xhr= new XMLHttpRequest();
# open url
# function load user
function loadUser(){
           
xhr.open('GET', 'user', true);
# function onload 
xhr.onload=function(){
if(this.status==200){
# console.log(this.responseText);
    var user=JSON.parse(this.responseText);
    var output= '';
     output += '<ul>'+
        '<li>ID:'+user.id+'</li>'+
        '<li>NAME:'+user.name+'</li>'+
        '<li>EMAIL:'+user.email+'</li>';
        document.getElementById('user').innerHTML=output;
}
}
# send
xhr.send();
}
# function loadUsers
function loadUsers(){
# open url
xhr.open('GET', 'users', true);
# function onload users
xhr.onload=function(){
if(this.status==200){
var users=JSON.parse(this.responseText);
var output= '';
for(var i in users){
     output += '<ul>'+

    '<li>ID:'+users[i].id+'</li>'+
    '<li>NAME:'+users[i].name+'</li>'+
    '<li>EMAIL:'+users[i].email+'</li>';
}
document.getElementById('users').innerHTML= output;
}
}
# send
xhr.send();
}
# ----------------------------AJAX 3 GITHUB  ------------------------------------
## event button click
        document.getElementById('button').addEventListener('click', loadUsers);
## function loadUsers
        function loadUsers(){
## object XML request
            var xhr = new XMLHttpRequest();
## open url api
            xhr.open('GET', 'https://api.github.com/users', true);
## function onload
            xhr.onload=function(){
                if(this.status==200){
                    var users=JSON.parse(this.responseText);
## console.log(users);
                    var output='';
                    for(var i in users){
                        output += 
                        '<div class="user">'+
                            '<img src="'+users[i].avatar_url+'" width="70" height=""' +
                            '<ul>'+
                                '<li>ID: '+users[i].id+'</li>'+
                                '<li>LOGIN: '+users[i].login+'</li>'+
                            '</ul>'+
                        '</div>';

                    }
                    document.getElementById('users').innerHTML=output;
                }
            }
## send
            xhr.send();
        }