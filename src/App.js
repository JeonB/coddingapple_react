import logo from "./logo.svg";
import "./App.css";

function App() {
  let post = "배고파 하아아아ㅏㅇ아";

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "36px" }}>블로그임</h4>
      </div>
      <h4> {post}</h4>
    </div>
  );
}

export default App;
