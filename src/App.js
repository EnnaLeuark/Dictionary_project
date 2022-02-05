import "./App.css";
import DictionaryForm from "./DictionaryForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <DictionaryForm />
        <footer>
          This project was coded by Anne Frenz and is
          <a href="https://github.com/EnnaLeuark/Dictionary_project">
            {" "}
            open-sourced on GitHub
          </a>{" "}
          and hosted on
          <a href="https://nervous-heyrovsky-3c2045.netlify.app/"> Netlify</a> .
        </footer>
      </div>
    </div>
  );
}

export default App;
