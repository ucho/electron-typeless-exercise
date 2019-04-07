import * as React from "react";
import { useModule, useActions, useMappedState } from "typeless";
import DenkoIdModule from "../../../state/denkoid/module";
import { DenkoIdActions } from "../../../state/denkoid/interface";

export function Main() {
  useModule(DenkoIdModule);

  const { login } = useActions(DenkoIdActions);
  const { denkoid } = useMappedState(state => state.denkoid);

  return (
    <>
      <h1>でんこちゃん</h1>
      { denkoid.length === 0 ?
        <button onClick={login}>ログイン</button>
        : <div>{ denkoid }</div>
      }
    </>
  );
}

export default Main;
