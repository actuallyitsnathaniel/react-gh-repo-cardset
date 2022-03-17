import "./index.css";
import GithubRepoCardSet from "../lib/components/react-gh-repo-cardset";

// https://trekinbami.medium.com/using-environment-variables-in-react-6b0a99d83cf5
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
