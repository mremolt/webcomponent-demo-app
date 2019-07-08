import { customElement, html, LitElement, property, TemplateResult } from 'lit-element';
import { takeUntil } from 'rxjs/operators';
import { inject } from '../../lib/di/di-container.class';
import { asyncObservable, asyncObservableTemplate } from '../../lib/lit/decorators';
import { withObservables } from '../../lib/mixins/with-observable';
import { RandomNumbersService } from '../services/random-numbers.service';
import { CounterFacade } from '../store/counter/counter.facade';

@customElement('mr-home')
export default class HomeElement extends withObservables(LitElement) {
  @property() private who = 'Home';
  @property() private counter = 0;

  @inject(RandomNumbersService) private generator!: RandomNumbersService;
  @inject(CounterFacade) private facade!: CounterFacade;

  private interval!: NodeJS.Timeout;

  public connectedCallback(): void {
    super.connectedCallback();

    this.facade.counter$.pipe(takeUntil(this.onDestroy$)).subscribe(data => {
      this.counter = data;
    });

    this.facade.increment();

    this.interval = setInterval(() => {
      this.facade.increment();
    }, 500);
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();

    clearInterval(this.interval);
  }

  public render(): TemplateResult {
    const counterTemplate = (num: number) =>
      html`
        <span style="color: red;">NUM: ${num}</span>
      `;

    return html`
      <p>Hello ${this.who}!</p>
      <p>Number of the day: ${this.generator.getNumber().toFixed(2)}!</p>
      <p>Counter: ${this.counter}!</p>
      <p>Counter2: ${asyncObservable(this.facade.counter$)}!</p>
      <p>
        Counter3: ${asyncObservableTemplate(this.facade.counter$, counterTemplate)}!
      </p>
    `;
  }
}
