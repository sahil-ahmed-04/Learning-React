import Video from "./components/Video";
import "./App.css"
function App(){
  let obj={
      title: "Node js Tutorial",
      views: "745K",
      channel: "Zoro Codes",
      time:"1 years ago",
  };
  return(
    <div className="App">
      <div><h1>Videos</h1></div>
      <Video {...obj}></Video>
      <Video 
      title="React js Tutorial" 
      views="45K"
       channel="Sanji Codes" 
       time="2 months ago"></Video>
      <Video 
      title="Mongo DB Tutorial" 
      views="205K" 
      time="7 months ago"></Video>
    </div>
  )
}

export default App;