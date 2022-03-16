import "./index.css";
import GithubRepoCardSet from "../lib/components/react-gh-repo-cardset";

var username = `${process.env.REACT_APP_GIT_USERNAME}`;
var token = `${process.env.REACT_APP_GIT_TOKEN}`;

function App() {
  require("dotenv").config();

  console.log("from /App:", username);
  return (
    <div className="App">
      <header className="App-header">
        <GithubRepoCardSet username={username} token={token} />
      </header>
    </div>
  );
}

export default App;
