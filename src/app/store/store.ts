import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createEpicMiddleware } from 'redux-observable-es6-compat';
import { rootEpic, rootReducer } from './root';

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = composeWithDevTools({
  name: 'Web Components demo app',
  trace: true,
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)));

epicMiddleware.run(rootEpic);
