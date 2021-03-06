import { useContext } from "react";
import { VIEWS } from "./constants";
import AppContext from "./context/appContext";

import Start from "./views/Start";
import Test from "./views/Test";
import Collection from "./views/Collection";

function App() {
  const appContext = useContext(AppContext);
  const view = appContext.settings.view;

  switch (view) {
    case VIEWS.START:
      return <Start />;
    case VIEWS.COLLECTION:
      return <Collection />;
    case VIEWS.TEST:
      return <Test />;
    default:
      return <NotFound />;
  }
}

const NotFound = () => {
  return (
    <div className="h-screen w-screen grid place-items-center text-white">
      <h1 className="syne text-4xl">404 Not Found</h1>
    </div>
  );
};

export default App;
