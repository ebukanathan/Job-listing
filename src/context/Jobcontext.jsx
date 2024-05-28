import { useState,createContext} from 'react'
import data from "../data.json";
import { v4 as uuid } from 'uuid'

export const JobContext = createContext()

export const JobProvider =(props)=>{

     const [job,setJob] = useState(data)
      const [categories,setCategories] = useState([])
     
    return(
        <JobContext.Provider value={[job,categories,setCategories]}>
             {props.children}
    </JobContext.Provider>

    )
    
}

