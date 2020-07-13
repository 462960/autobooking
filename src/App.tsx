import React, { useContext, useEffect } from "react";
import "./App.scss";
import { StoreContext } from "./utils/store";
import { useObserver } from "mobx-react";

import TopBar from "./components/TopBar";
import DropDownContainer from "./components/DropDownContainer";
import ChosenContainer from "./components/ChosenContainer";

function App() {
  const store = useContext(StoreContext);
  useEffect(() => {
    store.getServices();
    store.getBrands();
    store.getStyles();
  }, []);

  return useObserver(() => (
    <div>
      <TopBar />
      <ChosenContainer parse={store.parseList} />
      <DropDownContainer />
    </div>
  ));
}

export default App;
