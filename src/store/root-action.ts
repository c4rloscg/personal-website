import { LocationChangeAction, RouterAction } from 'react-router-redux';

import { ProjectAction } from './project/state';

type ReactRouterAction = RouterAction | LocationChangeAction;
export type RootAction = ReactRouterAction | ProjectAction | CareerAction;
