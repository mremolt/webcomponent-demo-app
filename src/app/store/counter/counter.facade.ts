import { injectable } from 'inversify';
import { createSelector } from 'reselect';
import { Observable } from 'rxjs';
import { Store } from '../../../lib/store/store.class';
import { RootState } from '../root';
import { decrement, increment } from './counter.actions';

const getCounterState = (state: RootState) => state.counter;

const getCounterValue = createSelector(
  [getCounterState],
  state => state.value
);

@injectable()
export class CounterFacade {
  public readonly counter$: Observable<number>;

  constructor(private store: Store<any>) {
    this.counter$ = this.store.select(getCounterValue);
  }

  public increment(): void {
    this.store.dispatch(increment());
  }

  public decrement(): void {
    this.store.dispatch(decrement());
  }
}
