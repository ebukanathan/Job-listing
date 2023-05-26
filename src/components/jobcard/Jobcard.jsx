import "./Jobcard.scss"


function Jobcard({position,logo,company,postedAt,contract,
    featured,news,location,role,level,languages,handleSubmit,handleInput}) {

     

  return (
    <div>
        <div className="card__container">
            <div className="card__left">
                <div className="card__icon">
                    <img src={logo} alt="company logo" className="img" />
                </div>
                <div className="card__description">
                     <div className="job__subtitle">
                        <h3 className="company__name">{company}</h3>
                        <div className="job__status">
                        {news == true? <button className="card__status-new">new!</button>:""}
                        {featured==true?<button className="card__status-featured">featured</button>:""}
                        </div>
                    </div>                 
                    <h3 className="job__title">{position}</h3>
                    <div className="job__tags">
                        <div className="age">
                            {postedAt}
                        </div>
                        <div className="contract">
                            {contract}
                        </div>
                        <div className="contract">
                            {location}
                        </div>

                    </div>
                </div>
            </div>
            <div className="card__right">
                <div className="job__categories">
            
            <form onSubmit={handleSubmit}>

                <button className="job__cat" value={role} onClick={handleInput}>{role}</button>
                    <button  className="job__cat" value={level} onClick={handleInput}>{level}</button>
                    {languages.map((item)=>(
                        <button  className="job__cat" key={item.key}value={item} onClick={handleInput}>{item}</button>
                    ))}
                </form>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Jobcard