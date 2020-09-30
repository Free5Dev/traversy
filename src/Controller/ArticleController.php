<?php

namespace App\Controller;

use App\Entity\Article;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ArticleController extends AbstractController
{
    /**
     * @Route("/", name="article_list")
     */
    public function index()
    {
        $articles = $this->getDoctrine()->getRepository(Article::class)->findAll();
        return $this->render('article/index.html.twig', [
            'articles' => $articles,
        ]);
    }
    /**
     * Permet d'afficher la page qui crée un article
     *@Route("/article/new", name="new_article")
     * @param Request $request
     * Method({"GET", "POST"})
     * @return Response
     */
    public function new(Request $request){
        $article = new Article();
        $form = $this->createFormBuilder($article)
                ->add('title', TextType::class, array('attr'=>array('class'=>'form-control')))
                ->add('body', TextareaType::class, array(
                    'required' => false,
                    'attr' => array('class'=> 'form-control')
                ))
                ->add('save', SubmitType::class, array('label'=>'Create', 'attr'=>array('class'=> "btn btn-primary mt-3")))
                ->getForm();
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $article = $form->getData();
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($article);
            $entityManager->flush();
            
            return $this->redirectToRoute("article_list");
        }
        return $this->render('article/new.html.twig', array('form'=> $form->createView()));
    }
    /**
     * Permet d'afficher la page qui crée un article
     *@Route("/article/edit/{id}", name="edit_article")
     * @param Request $request
     * Method({"GET", "POST"})
     * @return Response
     */
    public function edit(Request $request, $id){
        $article = $this->getDoctrine()->getRepository(Article::class)->find($id);
        $form = $this->createFormBuilder($article)
                ->add('title', TextType::class, array('attr'=>array('class'=>'form-control')))
                ->add('body', TextareaType::class, array(
                    'required' => false,
                    'attr' => array('class'=> 'form-control')
                ))
                ->add('save', SubmitType::class, array('label'=>'Update', 'attr'=>array('class'=> "btn btn-primary mt-3")))
                ->getForm();
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $article = $form->getData();
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($article);
            $entityManager->flush();
            
            return $this->redirectToRoute("article_list");
        }
        return $this->render('article/edit.html.twig', array('form'=> $form->createView()));
    }
    /**
     * Permet d'afficher la liste d'article
     *@Route("/article/{id}", name="article_show")
     * @return Response
     */
    public function show($id){
        $article = $this->getDoctrine()->getRepository(Article::class)->find($id);
        return $this->render("article/show.html.twig", array('article'=>$article));
    }
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
    /**
     * Permet d'afficher la page /article/save
     *@Route("/article/save")
     * @return Response
     */
    public function save(){

    }
}
