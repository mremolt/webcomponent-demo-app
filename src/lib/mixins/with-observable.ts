import { Subject } from 'rxjs';

type Constructor<T = {}> = new (...args: any[]) => T;

export function withObservables<TBase extends Constructor<HTMLElement>>(baseClass: TBase) {
  return class extends baseClass {
    public readonly onDestroy$ = new Subject();

    public disconnectedCallback(): void {
      this.onDestroy$.next();
    }
  };
}
