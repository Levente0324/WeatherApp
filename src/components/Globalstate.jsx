import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  city: "",
  current: {},
});

export { useGlobalState, setGlobalState };
