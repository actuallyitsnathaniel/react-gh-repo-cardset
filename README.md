# React Github Repo Card Set

## Installation

!! This is not available yet as an npm package, but once the package is finished it will be !!  
Rip the code from here and declare it all yourself for now. It is located at this directory within the repo:

```
/src/lib/components/react-gh-repe-cardset
```

I used [dotenv](https://www.npmjs.com/package/dotenv) to handle my GitHub API token during development. If you have never used dotenv before, learn that first before anything else. Dotenv is declared in the source index.js file, but the actual .env file must be in the ROOT directory——neighboring /node_modules, /src, and /public.

_\*\*\*Make sure that your .env file is ignored in your own repositores_

I used it because [Github's public API limits all users' API calls to 60/hr](https://docs.github.com/en/developers/apps/building-github-apps/rate-limits-for-github-apps) unless you utilize private access tokens or something similar. It may be overkill but it helped me tons. \*

##### _\* I was a newbie when I first accessed their API, so I hit the limit quickly and was distressed when things stopped working._

In your file, presumably located at `src/.env`, simply put your credentials in the corresponding fiels like so:

```bash
GIT_USER=<YOUR_USER_HANDLE>
GIT_TOKEN=<YOUR_PRIVATE_ACCES_TOKEN>
```

## Usage

You can import it in whichever style you like. Here are two examples:

```javascript
import GitHubRepoCards from "react-gh-repo-cardset";
// OR
const GithubRepoCards = require("react-gh-repo-cardset");

// your spankin' sweet code...
<GitHubRepoCards user="GIT_USER" token="GIT_TOKEN">
```

And that's all! This isn't a customizable package yet, but I'm planning on making it more modular as time goes on.
