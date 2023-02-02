import { useRef, useState } from "react";

import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { Sub } from "./types";

interface AppState {
  subs: Array<Sub>;
  newSubNumber: number;
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [mewSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null);

  const handleNewSub = (newSub: Sub) => {
    setSubs((subs) => [...subs, newSub]);
    setNewSubsNumber((n) => n + 1);
  };

  return (
    <div className="App" ref={divRef}>
      <h1>midu subs</h1>
      <List subs={subs} />
      New Subs: {mewSubsNumber}
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
