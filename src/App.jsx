import { useState } from "react";
import "./App.scss";
import Searchbar from "./components/Searchbar/Searchbar";

import Joblist from "./components/Joblist";
import Tab from "./components/Tab/Tab";
import Pages from "./pages/Pages";
import FilteredCard from "./components/FilteredCard/FilteredCard";
//import Searchbar from "./components/Searchbar/Searchbar";

function App() {
  const [selected, setSelected] = useState([]);

  function handleSelected(e, skill) {
    e.preventDefault();

    if (selected.length == 0) {
      return setSelected([...selected, skill]);
    } else if (selected.length > 0 && !selected.includes(skill)) {
      return setSelected([...selected, skill]);
    } else {
      return setSelected([...selected]);
    }
  }

  const handleDelete = (name) => {
    setSelected(selected.filter((c) => c !== name));
  };

  return (
    <div className="">
      <Searchbar selected={selected} handleDelete={handleDelete} />
      {selected.length > 0 ? "" : <Joblist handleSelected={handleSelected} />}

      {selected.length > 0 ? (
        <FilteredCard selected={selected} handleSelected={handleSelected} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
