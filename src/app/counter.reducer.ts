
import { INITIAL_STATE } from '@ngrx/store';
import { createReducer, on} from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
import { State } from '@ngrx/store/src';

export const initialState = 0;

export const counterReducer = createReducer( initialState, on(increment, (State) => State + 1), on(decrement, (State) => State - 1), on(reset, (State) => 0)
);
