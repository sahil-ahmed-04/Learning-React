import Video from "./components/Video";
import "./App.css"
import Border from "./components/Border";
import videos from "./Data/data.js";
function App(){
  
  return(
    <div className="App">
      <div><h1>Videos</h1></div>
      <div className="Videos">
        {
          videos.map(video=>{
            return(
              <Border><Video 
                  key={video.id}
                  title={video.title} 
                  views={video.views} 
                  time={video.time}
                  channel={video.channel}
                  verified={video.verified}
                  id={video.id}>
              </Video></Border>)
          })
        }
      </div>
      
    </div>
  )
}

export default App;