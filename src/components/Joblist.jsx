import { useState } from 'react'
import Jobcard from '../components/jobcard/Jobcard'
import data from "../data.json";


function Joblist() {
    const [job,setJob] = useState(data)

    console.log(job)
    
  
  
    return (
      <div className="app__container">
        <h3>hereh her</h3>
        
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
          
          />
       ))}
        
  
      </div>)
  
}

export default Joblist