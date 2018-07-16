import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromApp from './reducers/app.reducer';
import { environment } from '../../environments/environment';

export interface RootState {
  app: fromApp.State;
}

export const reducers: ActionReducerMap<RootState> = {
  app: fromApp.reducer
};

export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [ storeFreeze ] : [];
