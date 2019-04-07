import { createEpic, createReducer, ModuleLoaderOptions, DefaultState } from 'typeless';
import { DenkoIdActions, DenkoIdState, MODULE } from './interface';

// Create Epic for side effects
const epic = createEpic(MODULE);

const initialState: DenkoIdState = {
  denkoid: ""
};

// Create a reducer
// It's compatible with a standard reducer `(state, action) => state`
// Under the hood it uses `immer` and state mutations are allowed
const reducer = createReducer(initialState)
  .on(DenkoIdActions.login, state => {
    state.denkoid = "denko@example.com";
  });

const module: ModuleLoaderOptions<DefaultState, "denkoid"> = {
  epic,
  reducer,
  reducerPath: ["denkoid"]
}

export default module;
