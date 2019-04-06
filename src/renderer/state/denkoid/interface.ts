import { createActions } from 'typeless';

// Module name must be unique
// It's used as a prefix in actions and for logging in epics
export const MODULE = 'denkoid';

// Create Actions Creators
// `type` property is generated automatically
export const DenkoIdActions = createActions(MODULE, {
  login: null
});

// Redux state for this module
export interface DenkoIdState {
  denkoid: string;
}

// Extend default state
// This is a global redux state
declare module 'typeless/types' {
  interface DefaultState {
    denkoid: DenkoIdState;
  }
}
