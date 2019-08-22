import React from 'react';
import * as ReactDOM from "react-dom";
import logo from "./logo.svg";

// Use url https://api.github.com/users/acharlesl



/*
	{
  "login": "ACharlesL",
  "id": 9028200,
  "node_id": "MDQ6VXNlcjkwMjgyMDA=",
  "avatar_url": "https://avatars0.githubusercontent.com/u/9028200?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ACharlesL",
  "html_url": "https://github.com/ACharlesL",
  "followers_url": "https://api.github.com/users/ACharlesL/followers",
  "following_url": "https://api.github.com/users/ACharlesL/following{/other_user}",
  "gists_url": "https://api.github.com/users/ACharlesL/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ACharlesL/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ACharlesL/subscriptions",
  "organizations_url": "https://api.github.com/users/ACharlesL/orgs",
  "repos_url": "https://api.github.com/users/ACharlesL/repos",
  "events_url": "https://api.github.com/users/ACharlesL/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ACharlesL/received_events",
  "type": "User",
  "site_admin": false,
  "name": Charles,
  "company": ACL Company,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "public_repos": 17,
  "public_gists": 3,
  "followers": 0,
  "following": 0,
  "created_at": "2014-10-05T18:46:25Z",
  "updated_at": "2019-08-04T16:27:35Z"
}
*/

class Card extends React.Component {
    // learning constructor
    // and THIS keyword
    // Use Javascript style for conditional render
    render() {
        const profile = this.props;
        return(
            <div className="github-profile">
                <img src={profile.avatar_url} />
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        )
    }
}

export default Card;
