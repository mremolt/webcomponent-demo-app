import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { ActionType } from 'typesafe-actions';
import { decrementEpic } from './counter/counter.epics';
import { reducer as counterReducer } from './counter/counter.reducer';

export type CounterActions = ActionType<typeof import('./counter/counter.actions')>;

// tslint:disable-next-line: interface-name
export interface RootActions {
  CounterActions: CounterActions;
}

export const rootReducer = combineReducers({
  counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const rootEpic = combineEpics(decrementEpic);
