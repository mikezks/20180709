import * as fromApp from '../reducers/app.reducer';
import { createSelector } from '@ngrx/store';
import { RootState } from '..';

export let getAppState = (s: RootState) => s.app;

export const getCount = createSelector(
  getAppState,
  (state: fromApp.State) => state.count
);