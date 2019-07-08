import { injectable } from 'inversify';
import { AnyAction, Store as ReduxStore } from 'redux';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, share } from 'rxjs/operators';

import { Selector } from 'reselect';

import { store } from '../../app/store/store';

@injectable()
export class Store<T = any> extends Observable<T> {
  private store: ReduxStore<T>;

  constructor() {
    super();
    this.store = store as any;
    this.source = this.connect().pipe(distinctUntilChanged());
  }

  public dispatch<A extends AnyAction>(action: A): A {
    return this.store.dispatch(action);
  }

  public select<R>(selector: Selector<T, R>): Observable<R> {
    return this.source.pipe(
      map(state => selector(state)),
      distinctUntilChanged(),
      share()
    );
  }

  private connect(): Observable<T> {
    return new Observable(observer => {
      observer.next(this.store.getState());

      this.store.subscribe(() => {
        observer.next(this.store.getState());
      });
    });
  }
}
