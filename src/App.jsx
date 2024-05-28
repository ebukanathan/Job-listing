import { useState } from "react";
import "./App.scss";
import Searchbar from "./components/Searchbar/Searchbar";

import Joblist from "./components/Joblist";
import Pages from "./pages/Pages";
//import Searchbar from "./components/Searchbar/Searchbar";

function App() {
  const [selected, setSelected] = useState([]);

  function handleSelected(e, skill) {
    e.preventDefault();
    setSelected([...selected, skill]);
    console.log(selected);
  }

  return (
    <div className="">
      <Searchbar selected={selected} />
      <Joblist handleSelected={handleSelected} />
    </div>
  );
}

export default App;
