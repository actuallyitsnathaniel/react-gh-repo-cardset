import React, { useEffect, useState } from "react";

import "./index.css";

// publishing first NPM package
//https://levelup.gitconnected.com/publish-react-components-as-an-npm-package-7a671a2fb7f

// Dynamically propagated based on number of repositories
function GitRepoDeck(props) {
  // https://www.youtube.com/watch?v=5WFyhsnU4Ik&ab_channel=SteveGriffith-Prof3ssorSt3v3

  const [repos, setRepos] = useState([]);

  // fetch and map the repositories HERE
  const GetData = () =>
    useEffect(() => {
      // It's rude not to remember what you just asked for.
      // USE LOCAL STORAGE TO REDUCE API CALLS!!!
      // https://felixgerschau.com/react-localstorage/

      if (localStorage.length === 0) {
        console.log(props.username);
        fetch(`https://@api.github.com/users/${props.username}/repos`, {
          headers: {
            Authorization: `${props.token}`,
          },
        })
          .then((response) => {
            if (response.status === 401) {
              console.error(
                "Ah. good ol' 401 error. How many API calls have you made??"
              );
              alert(
                "Ah. good ol' 401 error. How many API calls have you made??"
              );
            } else if (response.status === 200) return response.json();
          })
          .then((json) => {
            // Amateur error handling
            if (json.length === 0) {
              console.log("Response is EMPTY. Check .env");
            } else {
              console.log(JSON.stringify(json));
              setRepos(json);
              localStorage.setItem("repos", JSON.stringify(json));
              console.log("Repos fetched to localStorage!");
            }
          })
          .catch((err) => {
            console.log(err);
            return err;
          });
      } else {
        console.log("Repos already in localStorage.");

        setRepos(Array.from(JSON.parse(localStorage.getItem("repos"))));
        console.log(JSON.parse(localStorage.getItem("repos")));
      }
    }, []);

  // run GetData
  GetData();

  return (
    <div>
      <div style={{ marginTop: 25 }}>Total Repositories: {repos.length}</div>
      <div className="git-repo-card-set">
        {repos.map((details, i) => {
          return (
            <a
              className="git-repo-card"
              href={details.html_url}
              key={details.id}
            >
              <div className="git-repo-card-contents">
                <div className="git-repo-card-title">{details.name}</div>
                <div className="git-repo-card-desc">{details.description}</div>
                <div className="git-repo-card-codeType">{details.language}</div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default GitRepoDeck;
