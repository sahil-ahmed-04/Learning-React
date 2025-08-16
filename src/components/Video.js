import "./Video.css"


function Video({title, channel="Luffy Codes", views, time, verified,id}){
    return(
        <div className="container">
            <div className="pic">
                 <img src={`https://picsum.photos/id/${id}/400/220`} alt="Katherine Johnson" />
            </div>
           
            <div className="title">{title}</div>
            <div className="channel">{channel}
                {verified && <span className="material-symbols-outlined">verified</span>}
                
            </div>
            <div className="views">
                {views} Views <span>.</span> {time}
            </div>
        </div>
    )
}

export default Video;