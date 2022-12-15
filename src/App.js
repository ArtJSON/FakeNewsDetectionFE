import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [isVerified, setIsVerified] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const [isLoading, setIsLodaing] = useState(false);
  const [formValue, setFormValue] = useState("");
  const [ngrokLink, setNgrokLink] = useState("");

  const handleSubmit = () => {
    setIsLodaing(true);
    setIsVerified(false);
    fetch(ngrokLink + "/verify?text=" + formValue, {
      headers: { "ngrok-skip-browser-warning": "true" },
    })
      .catch(() => {
        setIsLodaing(false);
      })
      .then((response) => response.json())
      .then(({ value }) => {
        setIsTrue(value === "Real");
        setIsLodaing(false);
        setIsVerified(true);
      });
  };

  return (
    <div className="App">
      <h1>Verify the article</h1>
      <div className="formContainer">
        <form
          className="linkForm"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <label htmlFor="link">
            Ngrok link (for example https://9708-35-194-138-100.ngrok.io):
          </label>
          <div className="inputGroup">
            <input
              type="text"
              name="link"
              id="link"
              className="ngrokInput"
              onChange={(e) => {
                setNgrokLink(e.target.value);
              }}
            />
          </div>

          <label htmlFor="articleText">Text of the article:</label>
          <div className="inputGroup">
            <textarea
              type="text"
              name="articleText"
              id="articleText"
              className="linkInput"
              onChange={(e) => {
                setFormValue(e.target.value);
              }}
            />
            <input type="submit" value="Verify" className="submitButton" />
          </div>
        </form>
      </div>
      {isLoading ? (
        <div class="loaderLine" />
      ) : (
        <div class="loaderLinePlaceholder" />
      )}
      {isVerified && <Result isTrue={isTrue} />}
    </div>
  );
}

function Result(props) {
  return (
    <div className="resultContainer">
      <p className="resultContainerResult">
        The article has been determined to be
        {props.isTrue ? " true ✅" : " fake ❌"}
      </p>
      <p>
        Learn more about our verification process <a href="#">here</a>
      </p>
    </div>
  );
}

export default App;
