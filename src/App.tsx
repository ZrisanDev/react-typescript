import { useEffect, useState } from "react";

import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { Sub } from "./types";

const INITIAL_STATE = [
  {
    nick: "dapelu",
    subMonths: 2,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "Dapelu hace mmdereador",
  },
  {
    nick: "sergio_serr",
    subMonths: 4,
    avatar: "https://i.pravatar.cc/150?u=sergio",
  },
];

interface AppState {
  subs: Array<Sub>;
  newSubNumber: number;
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [mewSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubNumber"]>(0);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  return (
    <div className="App">
      <h1>midu subs</h1>
      <List subs={subs} />
      <br />
      <Form />
    </div>
  );
}

export default App;
