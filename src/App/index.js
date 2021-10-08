import "./index.css";
import GithubRepoCardSet from "../lib/components/react-gh-repo-cardset";

function App() {
  require("dotenv").config();

  console.log("from /App:", process.env.REACT_APP_GIT_USERNAME);
  return (
    <div className="App">
      <header className="App-header">
        <GithubRepoCardSet
          username={process.env.REACT_APP_GIT_USERNAME}
          token={process.env.REACT_APP_GIT_TOKEN}
        />
      </header>
    </div>
  );
}

export default App;
