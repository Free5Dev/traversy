# AngularCrashTodolist

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# -------------------------------------------------------------------------------
## ---------------------------------------  ANGULAR CRASH TODO
## ---------------------------------------Install d'abord node js, npm cli
ng new nomProject
cd nomProject
ng serve --open 
## --------------------------------------- todos component
1. ng generate component components/todos 
2. Dans todos.component.html 
    <h1>Todos</h1> 
3. Ensuite dans app.component.html appel du selecteur 
    <app-todos></app-todos> 
4. Dans todos.component.ts 
    todos:Todo[];
5. Dans le dossier app créer un dossier models et ensuite créer un fichier Todo.ts et mettre de dans:
    export class Todo{
        id: number;
        title: string;
        completed: boolean;
    }
6. Se retoourner dans todos.components.ts et : 
    import { Todo } from '../../models/Todo'; 
7. Ensuite mettre dans 
    ngOnInit() {
    this.todos = [
      {
        id:1,
        title: "Todo One",
        completed: false
      },
      {
        id:2,
        title: "Todo Two",
        completed: true
      },
      {
        id:3,
        title: "Todo Three",
        completed: false
      },
    ]
  }
8. Se deplacer dans todos.component.html
    <ul *ngFor="let todo of todos ">
        <li>{{ todo.title }}</li>
    </ul>

