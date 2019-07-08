import { getType } from 'typesafe-actions';
import { DeepReadonly } from 'utility-types';
import { RootActions } from '../root';
import { decrement, increment, incrementBy, reset } from './counter.actions';

export const initialState = {
  value: 0,
};

export type State = DeepReadonly<typeof initialState>;

export function reducer(state: State = initialState, action: RootActions['CounterActions']): State {
  switch (action.type) {
    case getType(increment):
      return { ...state, value: state.value + 1 };

    case getType(decrement):
      return { ...state, value: state.value - 1 };

    case getType(incrementBy):
      return { ...state, value: state.value + action.payload };

    case getType(reset):
      return initialState;
  }

  return state;
}
