import React,{ useContext} from 'react'
import { JobContext } from '../../context/Jobcontext'
import  Searchcard  from './Searchcard'



function Searchbar() {
  const [categories] =useContext(JobContext)

  
  
  return (
    <div className="search__bar">
      <div className="search-left">
        {
          categories.map(item=>(
            <Searchcard key={item.id} skills={item.input}/>
            
          ))
        }
      </div>
      <div className="search-right">

      </div> 
      
    </div>
  )
}

export default Searchbar