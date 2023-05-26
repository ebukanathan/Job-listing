import { useState,useContext } from 'react'
import Jobcard from '../components/jobcard/Jobcard'

import { v4 as uuid } from 'uuid'

import { JobContext } from '../context/Jobcontext'





function Joblist() {

  const [job,categories,setCategories] = useContext(JobContext)

  
  

     const[input,setInput] = useState('')
     

    const handleInput=(e)=>{
     setInput(e.target.value)
     }

const  handleSubmit=(e)=>{
    e.preventDefault();
    
 
    setCategories(prevcate=>[...prevcate,{id:uuid(),input:input}]);
  
}

console.log(categories)
  
    
    
    
  
  
    return (
      <div className="app__container">
        
       
        
        {job.map((item)=>(
          <Jobcard key={item.id} 
          position={item.position}
          logo={item.logo} 
          company={item.company}
          postedAt ={item.postedAt}
          contract={item.contract}
          featured={item.featured}
          news={item.new}
          location={item.location}
          role={item.role}
          level={item.level}
          languages={item.languages}
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          
          />
       ))} 

      
        
  
      </div>)
  
}

export default Joblist