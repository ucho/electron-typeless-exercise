import { createEpic, createReducer } from 'typeless';
import { DenkoIdActions, DenkoIdState, MODULE } from './interface';

// Create Epic for side effects
export const DenkoIdEpic = createEpic(MODULE);

const initialState: DenkoIdState = {
  denkoid: ""
};

// Create a reducer
// It's compatible with a standard reducer `(state, action) => state`
// Under the hood it uses `immer` and state mutations are allowed
export const DenkoIdReducer = createReducer(initialState)
  .on(DenkoIdActions.login, state => {
    state.denkoid = "denko@example.com";
  });
