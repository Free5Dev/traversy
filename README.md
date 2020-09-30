# confirmation de delete avec boite de dialogue
1- Controller
2- Twig
2- JS
## Controller method delete in class controller
<?php 
/**
    * Permet de supprimer un article
    * @Route("/article/delete/{id}")
    *Method({"DELETE"})
    * @return Reponse
*/
public function delete(Request $request, $id){
        $article =  $this->getDoctrine()->getRepository(Article::class)->find($id);

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($article);
        $entityManager->flush();

        $reponse = new Response();
        $reponse->send();

}
?>
## Twig 
    <td><a href="" data-id="{{article.id}}" class="btn btn-danger delete-article">Delete</a></td>
    {% block javascripts %}
        <script src="/js/main.js"></script>
    {% endblock %}
## JS
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

