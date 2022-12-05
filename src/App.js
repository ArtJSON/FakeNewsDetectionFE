import { useState } from "react";
import "./App.css";

function getRandomInt(min, max) {
  return Math.random() * (max - min) + min;
}

function App() {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLodaing] = useState(false);

  return (
    <div className="App">
      <h1>Verify the article</h1>
      <div className="formContainer">
        <form
          className="linkForm"
          onSubmit={(e) => {
            e.preventDefault();
            setIsVerified(false);
            setIsLodaing(true);
            setTimeout(() => {
              setIsVerified(true);
              setIsLodaing(false);
            }, getRandomInt(500, 2000));
          }}
        >
          <label htmlFor="url">Link to the article:</label>
          <div className="inputGroup">
            <input type="text" name="url" id="url" className="linkInput" />
            <input type="submit" value="Verify" className="submitButton" />
          </div>
        </form>
      </div>
      {isLoading ? (
        <div class="loaderLine" />
      ) : (
        <div class="loaderLinePlaceholder" />
      )}
      {isVerified && <Result true={Math.random() >= 0.5} />}
    </div>
  );
}

function Result(props) {
  return (
    <div className="resultContainer">
      <p className="resultContainerResult">
        The article has been determined to be
        {props.true ? " true ✅" : " fake ❌"}
      </p>
      <p>
        Learn more about our verification process <a href="#">here</a>
      </p>
    </div>
  );
}

export default App;
