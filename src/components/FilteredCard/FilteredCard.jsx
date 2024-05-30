import React, { useEffect, useState } from "react";
import data from "../../data.json";
import Jobcard from "../jobcard/Jobcard";

function FilteredCard({ selected, handleSelected }) {
  const [filtered, setFiltered] = useState([]);
  console.log(data);

  console.log(selected);

  //   const showLang = (c) => {
  //     return c..map((lang) => (selected.includes(lang) ? lang : ""));
  //   };

  const showSelected = () => {
    data.map((c) => {
      if (
        selected.includes(c.role) ||
        selected.includes(c.level) ||
        c.languages.forEach((l) => selected.includes(l))
      ) {
        setFiltered((s) => [...s, c]);
      }
      console.log(filtered);
    });
  };
  useEffect(() => {
    showSelected();
  }, []);

  //console.log(showSelected);
  return (
    <div>
      {filtered.map((item) => (
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
    </div>
  );
}

export default FilteredCard;
