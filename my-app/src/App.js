import { FaAngleDoubleRight } from 'react-icons/fa'
import { useState, useEffect } from 'react';

// const url = 'https://course-api.netlify.app/api/react-tabs-project'
const url = 'https://course-api.com/react-tabs-project'


function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)
  
  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    console.log(newJobs)
    setLoading(false)
  }
  
  useEffect(()=> {
    fetchJobs()
  }, [])
  
  if(loading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    )
  }
  const {dates, company, duties, title} = jobs[value]
  
  const dutiesList = 
    duties.map((duty, index) => {
      return (<div key={index} className='job-desc'>
        <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
        <p>{duty}</p>
      </div>)
    })

  const btnsList = jobs.map((item, index) => {
    return (
      <button key={item.id} onClick={()=> setValue(index)} className={`job-btn ${index === value && "active-btn" }`}>{item.company}</button>
    )
  })
  

  return (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        {/* btn container */}
        <div className='btn-container'>
        {btnsList}
        </div>
        {/* job info */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {dutiesList}
        </article>
      </div>
    </section>
  );
}

export default App;
