import React, { useContext, useEffect } from "react";
import "./App.scss";
import { StoreContext } from "./utils/store";

import TopBar from "./components/TopBar";

function App() {
  const store = useContext(StoreContext);
  useEffect(() => {
    // store.getServices();
    // store.getBrands();
    // store.getStyles();
  }, []);

  return (
    <div>
      <TopBar />
      Good!
    </div>
  );
}

export default App;
