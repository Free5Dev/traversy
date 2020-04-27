<?php 
namespace App\Controller;

use App\Entity\Article;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ArticleController extends AbstractController{

    /**
     *@Route("/", name="article_list") 
     *@Method({"GET"})
     * @return Response
     */
    public function index(){
        $articles = $this->getDoctrine()->getRepository(Article::class)->findAll();
        return $this->render("article/index.html.twig", array('name' => 'Said', 'articles' =>$articles));
    }
    /**
     * Undocumented function
     *@Route("/article/new", name="article_new")
     * @param Request $request
     * @return void
     */
    public function new(Request $request){
        $article = new Article();
        $form = $this->createFormBuilder($article)
                ->add('title', TextType::class, array('attr'=>array('class'=>'form-control')))
                ->add('body',TextareaType::class,array('required'=>false, 'attr'=>array('class'=>'form-control')))
                ->add('save', SubmitType::class, array('label'=>'ADD', 'attr'=>array('class'=>'btn btn-primary')))
                ->getForm();
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $article = $form->getData();
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($article);
            $entityManager->flush();

            return $this->redirectToRoute("article_list");
        }

        return $this->render("article/new.html.twig", array('form'=>$form->createView()));
    }
    /**
     * Undocumented function
     *@Route("/article/edit/{id}", name="article_edit")
     * @param Request $request
     * @return void
     */
    public function edit(Request $request, $id){
        $article = $this->getDoctrine()->getRepository(Article::class)->find($id);
        $form = $this->createFormBuilder($article)
                ->add('title', TextType::class, array('attr'=>array('class'=>'form-control')))
                ->add('body',TextareaType::class,array('required'=>false, 'attr'=>array('class'=>'form-control')))
                ->add('save', SubmitType::class, array('label'=>'Update', 'attr'=>array('class'=>'btn btn-primary')))
                ->getForm();
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->flush();

            return $this->redirectToRoute("article_list");
        }

        return $this->render("article/edit.html.twig", array('form'=>$form->createView()));
    }
    /**
     * Undocumented function
     *@Route("/article/{id}", name="article_show")
     * @return Response
     */
    public function show($id){
        $article = $this->getDoctrine()->getRepository(Article::class)->find($id);
        return $this->render("article/show.html.twig", array('article'=>$article));
    }
    /**
     * Undocumented function
     *@Route("/article/delete/{id}", name="article_delete")
     * @param Request $request
     * @return Response
     */
    public function delete(Request $request, $id){
        $article = $this->getDoctrine()->getRepository(Article::class)->find($id);
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($article);
        $entityManager->flush();
        $response = new Response();
        $response->send();
    }
    /**
     * Undocumented function
     *@Route("/article/save")
     * @return Response
     */
    // public function save(){
    //     $entityManager = $this->getDoctrine()->getManager();
    //     $article = new Article();
    //     $article->setTitle("Article Three");
    //     $article->setBody("This is Body for Article Three");
    //     $entityManager->persist($article);
    //     $entityManager->flush();
    //     return new Response("Save article id:".$article->getId());
    // }
}