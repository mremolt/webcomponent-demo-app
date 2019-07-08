import { customElement, html, LitElement, property, TemplateResult } from 'lit-element';

@customElement('mr-page2')
export default class Pagw2Element extends LitElement {
  @property()
  private who = 'Page 2';

  public render(): TemplateResult {
    return html`
      <p>Hello ${this.who}!!!!</p>
    `;
  }
}
