import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Components from "../../components";
import { StoreState, queue } from "../../store/";

const App = () => {
  const dispatch = useDispatch();
  const app = useSelector((state: StoreState) => state.app);

  return (
    <Components.Wrappers.Authentication beLoggedIn={true}>
      <Components.Loaders.LoadingPage isLoading={app.isLoading}>
        <>
          <p>Welcome to the app!</p>
          <p>Current state: {app.data.state}</p>

          <button onClick={() => dispatch(queue())}>Click to queue</button>
        </>
      </Components.Loaders.LoadingPage>
    </Components.Wrappers.Authentication>
  );
};

export default App;
