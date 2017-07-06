import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from '../reducers'
import rootEpic from '../epics';

const loggerMiddleware = createLogger()
const epicMiddleware = createEpicMiddleware(rootEpic)

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      epicMiddleware,
      loggerMiddleware
    )
  )
}
