import { useState } from "react";
import Jobcard from "../components/jobcard/Jobcard";
import { v4 as uuid } from "uuid";
import data from "../data.json";

function Joblist({ handleSelected }) {
  console.log(data);
  return (
    <div className="app__container">
      <ul className="">
        {data.map((item) => (
          <Jobcard
            key={item.id}
            position={item.position}
            // logo={item.logo}
            company={item.company}
            postedAt={item.postedAt}
            contract={item.contract}
            featured={item.featured}
            news={item.new}
            location={item.location}
            role={item.role}
            level={item.level}
            languages={item.languages}
            handleSelected={handleSelected}
          />
        ))}
      </ul>
    </div>
  );
}

export default Joblist;
