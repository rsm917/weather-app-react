import Weather from "./Weather";
import "./Weather.css";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Seattle" />

        <div className="Footer">
          <span id="coded-by">
            <a
              href="https://github.com/rsm917/weather-app-react"
              id="git-link"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            by Rebecca Shuping
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
