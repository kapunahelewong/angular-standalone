import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {BuilderModule} from '@builder.io/angular'; // Import the Builder.io Angular SDK


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule, BuilderModule],
  template: `
    <main>
      <h1>hi</h1>
      <builder-component
        model="page"
        entry="/test"
        (load)="noBuilderPageForUrl = $event ? false : true"
        (error)="noBuilderPageForUrl = true"
      >
      </builder-component>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
          </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
  noBuilderPageForUrl: boolean = false;
}
