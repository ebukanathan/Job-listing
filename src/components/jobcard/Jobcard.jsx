import "./Jobcard.scss"

function Jobcard({position,logo,company,postedAt,contract,
    featured,news,location,role,level,languages}) {

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
                    <button className="job__cat">{role}</button>
                    <button  className="job__cat">{level}</button>
                    {languages.map((item)=>(
                        <button  className="job__cat" key={item.key}>{item}</button>
                    ))}
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Jobcard