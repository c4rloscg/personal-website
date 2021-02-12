import { combineReducers } from 'redux';
// @ts-ignore
import { reducer as burgerMenu } from 'redux-burger-menu';
import { StateType } from 'typesafe-actions';

import { projectReducer } from './project/state';

const rootReducer = () =>
    combineReducers({
        project: projectReducer,
        burgerMenu,
    });

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
export type RootState = StateType<ReturnType<typeof rootReducer>>;

export default rootReducer;
