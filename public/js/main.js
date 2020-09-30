// select table
const articles = document.getElementById('articles');
// if table existe
if(articles){
    // event with click table
    articles.addEventListener('click', (e)=>{
        // if classname == delete-article
        if(e.target.className === 'btn btn-danger delete-article'){
            // if are you sure confirm
            if(confirm('Are you Sure ?')){
                // select data-id
                const id= e.target.getAttribute('data-id');
                // fetch delete
                fetch(`/article/delete/${id}`,{
                    method: 'DELETE'
                }).then(res=>window.location.reload());
                
            }
        }
    });
}