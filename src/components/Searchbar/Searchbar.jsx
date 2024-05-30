import { useState, useContext } from "react";

import "./Searchbar.scss";
import { v4 as uuid } from "uuid";
import Jobcard from "../jobcard/Jobcard";
import Tab from "../Tab/Tab";
//import  Searchcard  from './Searchcard'

function Searchbar({ selected, handleDelete }) {
  console.log(selected);
  //  const [search, setSearch] = useState();

  //   const [input, setInput] = useState("");

  //   const handleInput = (e) => {
  //     setInput(e.target.value);
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(input);

  //     setCategories([...categories, { id: uuid(), skill: input }]);
  //     //setCategories(categories.includes(input)?<h1>already</h1>:[...categories,{id:uuid(),skill:input}])
  //   };

  //   const unique = categories;

  //   const seen = new Set();

  //   const filteredArr = unique.filter((el) => {
  //     const duplicate = seen.has(el.skill);
  //     seen.add(el.skill);
  //     return !duplicate;
  //   });

  //   const handleDel = (id) => {
  //     setSearch(search.filter((el) => el.id !== id));
  //   };

  //   console.log(filteredArr);

  return (
    <div className="searchbar">
      {selected?.map((item) => (
        // <Jobcard
        //   key={item.id}
        //   position={item.position}
        //   logo={item.logo}
        //   company={item.company}
        //   postedAt={item.postedAt}
        //   contract={item.contract}
        //   featured={item.featured}
        //   news={item.new}
        //   location={item.location}
        //   role={item.role}
        //   level={item.level}
        //   languages={item.languages}
        // />
        <Tab key={item.id} position={item} handleDelete={handleDelete} />
      ))}
    </div>
    //     <>

    //       <div className="search__bar">
    //         <div className="search__left">
    //           {filteredArr.map((item) => (
    //             <h2 key={item.id} value={item.input}>
    //               {item.skill}
    //               <button onClick={handleDel}>X</button>
    //             </h2>
    //           ))}
    //         </div>
    //         <div className="search-right"></div>
    //       </div>

    //       <div className=""></div>
    //       {/* <div>
    //       {
    //       filteredArr.length === 0?
    //       (job.map((item)=>(
    //         <Jobcard key={item.id}
    //         position={item.position}
    //         logo={item.logo}
    //         company={item.company}
    //         postedAt ={item.postedAt}
    //         contract={item.contract}
    //         featured={item.featured}
    //         news={item.new}
    //         location={item.location}
    //         role={item.role}
    //         level={item.level}
    //         languages={item.languages}
    //         handleInput={handleInput}
    //         handleSubmit={handleSubmit}

    //         />))):(
    //           job.map((item)=>{
    //             if(filteredArr.includes(item.role)){
    //               <Jobcard key={item.id}
    //         position={item.position}
    //         logo={item.logo}
    //         company={item.company}
    //         postedAt ={item.postedAt}
    //         contract={item.contract}
    //         featured={item.featured}
    //         news={item.new}
    //         location={item.location}
    //         role={item.role}
    //         level={item.level}
    //         languages={item.languages}
    //         handleInput={handleInput}
    //         handleSubmit={handleSubmit}
    //       />
    //             }else{<h2>heelllloooo</h2>}
    //           })

    //           )
    //         }
    //     </div> */}

    //       <div className="container">
    //         {selected.map((item) => {
    //           let jobTags = [
    //             item.role,
    //             item.level,
    //             ...(item.languages || []),
    //             ...(item.tools || []),
    //           ];

    //           console.log(jobTags);

    //           let filterJobs = (jobTags, filteredArr) =>
    //             filteredArr.every((value) => jobTags.includes(value));

    //           return filteredArr.length === 0 ? (
    //             <Jobcard
    //               key={item.id}
    //               position={item.position}
    //               logo={item.logo}
    //               company={item.company}
    //               postedAt={item.postedAt}
    //               contract={item.contract}
    //               featured={item.featured}
    //               news={item.new}
    //               location={item.location}
    //               role={item.role}
    //               level={item.level}
    //               languages={item.languages}
    //               handleInput={handleInput}
    //               handleSubmit={handleSubmit}
    //             />
    //           ) : (
    //             filterJobs(jobTags, filteredArr) && (
    //               <Jobcard
    //                 key={item.id}
    //                 position={item.position}
    //                 logo={item.logo}
    //                 company={item.company}
    //                 postedAt={item.postedAt}
    //                 contract={item.contract}
    //                 featured={item.featured}
    //                 news={item.new}
    //                 location={item.location}
    //                 role={item.role}
    //                 level={item.level}
    //                 languages={item.languages}
    //                 handleInput={handleInput}
    //                 handleSubmit={handleSubmit}
    //               />
    //             )
    //           );
    //         })}
    //       </div>
    //     </>
  );
}

export default Searchbar;
