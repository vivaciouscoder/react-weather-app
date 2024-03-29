import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <Weather defaultCity="Berlin" />
        </div>
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/vahide-mousavi/"
            target="-blank"
            rel="noreferrer"
          >
            Viv Mousavi{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/vivaciouscoder/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub{" "}
          </a>
          and hosted on{" "}
          <a
            href="https://react-weather-app-byviv.netlify.app/"
            target="-blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
