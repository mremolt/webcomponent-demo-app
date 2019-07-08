import '@appnest/web-router/router-slot';
import { customElement, html, LitElement, property, TemplateResult } from 'lit-element';

const ROUTES = [
  {
    component: () => import('./pages/home.element'),
    path: 'home',
  },
  {
    component: () => import('./pages/page2.element'),
    path: 'page2',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@customElement('mr-app')
export class AppElement extends LitElement {
  @property()
  private who = 'World';

  public render(): TemplateResult {
    return html`
      <h1>Hello ${this.who}!</h1>

      <ul>
        <li>
          <router-link path="/home">Home</router-link>
          <router-link path="/page2">Page 2</router-link>
        </li>
      </ul>

      <router-slot .routes="${ROUTES}"></router-slot>
    `;
  }
}
