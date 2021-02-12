import createStore, { RootServiceDependencies } from './store';
export type TRootServiceDependencies = RootServiceDependencies;
export default createStore;

import { RootState } from './root-reducer';
export type TRootState = RootState;

export { default as rootReducer } from './root-reducer';
