import { useState, useContext } from "react";

import "./Searchbar.scss";
import { v4 as uuid } from "uuid";
import Jobcard from "../jobcard/Jobcard";
import Tab from "../Tab/Tab";
//import  Searchcard  from './Searchcard'

function Searchbar({ selected, handleDelete }) {
  console.log(selected);

  return (
    <div className="searchbar">
      {selected?.map((item) => (
        <Tab key={item.id} position={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default Searchbar;
