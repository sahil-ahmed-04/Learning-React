import "./Video.css"

function Video({title, channel="Luffy Codes", views, time}){
    return(
        <div className="container">
            <div className="pic">
                 <img src="https://picsum.photos/200/300?random=1" alt="Katherine Johnson" />
            </div>
           
            <div className="title">{title}</div>
            <div className="channel">{channel}</div>
            <div className="views">
                {views} Views <span>.</span> {time}
            </div>
        </div>
    )
}

export default Video;