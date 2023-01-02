export default function AboutPage() {
  return (
    <div className="App">
      <h1>Our process</h1>
      <div className="about-page">
        <h2>Machine learning model</h2>
        <p>
          The machine learning model was trained using{" "}
          <a href="https://www.kaggle.com/datasets/saurabhshahane/fake-news-classification">
            WELFake
          </a>{" "}
          dataset. We chose this dataset because it is large, often updated and
          consists articles on wide variety of topics from many different
          sources.
        </p>
        <h2>Types of fake news</h2>
        <p>
          Remember, that there are many different types of fake news, not all of
          which can be detected by our model. Some types of fakes are:{" "}
        </p>
        <ul>
          <li>
            Clickbait - extremely shocking and intriguing headlines and images,
            that are often not true to make them more attractive.
          </li>
          <li>
            Propaganda - false stories created by governments in order to
            promote politicial agenda.
          </li>
          <li>
            Poor quality journalism - fake news are not always malicious.
            Sometimes, some journalists make mistakes or forget to fact-check
            information.
          </li>
          <li>
            Imposter content - websites, that impersonate real news sources.
          </li>
        </ul>
      </div>
    </div>
  );
}
