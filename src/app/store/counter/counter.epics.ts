import { AnyAction } from 'redux';
import { ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { filter, mapTo, throttleTime } from 'rxjs/operators';
import { decrement, increment } from './counter.actions';

export const decrementEpic = (action$: Observable<AnyAction>) =>
  action$.pipe(
    ofType(increment),
    throttleTime(1200),
    filter(() => Math.random() > 0.5),
    mapTo(decrement())
  );
