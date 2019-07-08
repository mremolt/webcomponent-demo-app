import { createAction, createStandardAction } from 'typesafe-actions';

export const increment = createAction('[Counter] Increment value');
export const incrementBy = createStandardAction('[Counter] Increment value by')<number>();
export const decrement = createAction('[Counter] Decrement value');
export const reset = createAction('[Counter] Reset value');

