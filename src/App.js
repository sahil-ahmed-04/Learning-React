import './App.css';

function App() {
  let name="react app"
  let className="App-header"
  console.log(App)
  return (
    <div className="">
      <div className={className}>
        {name}
        <h1>Hello World</h1>
        <Demo></Demo>
      </div>
      
    </div>
  );
}

function Demo() {
  console.log(Demo)
  return (
    <div className="App">
      <div className="App-header">
        <h1>Demo</h1>
      </div> 
    </div>
  );
}

export default App;
