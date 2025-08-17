import Video from "./components/Video";
import PlayButton from "./components/PlayButton";
import "./App.css";
import Border from "./components/Border";
import videos from "./Data/data.js";
function App() {
  return (
    <div className="App" onClick={()=>console.log("App")}>
      <div>
        <h1>Videos</h1>
      </div>
      <div className="Videos">
        {videos.map((video) => {
          return (
            <Border>
              <Video
                key={video.id}
                title={video.title}
                views={video.views}
                time={video.time}
                channel={video.channel}
                verified={video.verified}
                id={video.id}
              >
                <PlayButton
                  onPlay={() => alert(`Playing..${video.title}`)}
                  onPause={() => alert(`Paused..${video.title}`)}
                >
                  ▶️⏸️
                </PlayButton>
              </Video>
            </Border>
          );
        })}
      </div>
      <div style={{ clear: "both" }}>
        <PlayButton message="Heloooooosss" onSmash={(m) => console.log(m)}>
          Say Hello
        </PlayButton>
      </div>
    </div>
  );
}

export default App;
