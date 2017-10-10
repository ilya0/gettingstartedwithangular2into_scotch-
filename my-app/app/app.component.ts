import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <header>
        <nav class="navbar navbar-inverse">
            <div class="navbar-header">
                <a href="/" class="navbar-brand">My Angular 2 App</a>
            </div>
        </nav>
    </header>


        <main>
            <div class="jumbotron">
            <h1>Welcome to Our App!</h1>
            <p> {{message}} </p>
            </div>

            <div *ngIf="users">
                <div *ngFor="let user of users">
                    <p> The user is {{user.name}} and username is {{user.username}} </p>
                </div>
            </div>
        </main>



<footer class="text-center">
</footer>
  `,
  styles: [`
    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
  `]
})


export class AppComponent {

    message = "Heellooo yooo";
    users = [
            {id: 25, name: "Bob",username: "bobber" },
            {id: 24, name: "rob",username: "lober" },
            {id: 12, name: "cob",username: "hober" } 
            ];
}