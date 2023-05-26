import './App.scss'
import Joblist from './components/Joblist'
import Searchbar from './components/Searchbar/Searchbar'



import { JobProvider } from './context/Jobcontext'



function App() {


  return (
    <JobProvider>
      <div className="app__container">
        <Searchbar/>
        <Joblist/>
      </div>
    </JobProvider>

  )
}

export default App
