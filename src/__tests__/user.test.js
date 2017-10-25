import React from 'react'
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'
import ConnectedUser from '../components/User';

describe('Mounting the component with mocked store',()=>{
    const initialState = {
      "login": "NemanjaTck",
      "id": 3010324,
      "avatar_url": "https://avatars3.githubusercontent.com/u/3010324?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/NemanjaTck",
      "html_url": "https://github.com/NemanjaTck",
      "followers_url": "https://api.github.com/users/NemanjaTck/followers",
      "following_url": "https://api.github.com/users/NemanjaTck/following{/other_user}",
      "gists_url": "https://api.github.com/users/NemanjaTck/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/NemanjaTck/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/NemanjaTck/subscriptions",
      "organizations_url": "https://api.github.com/users/NemanjaTck/orgs",
      "repos_url": "https://api.github.com/users/NemanjaTck/repos",
      "events_url": "https://api.github.com/users/NemanjaTck/events{/privacy}",
      "received_events_url": "https://api.github.com/users/NemanjaTck/received_events",
      "type": "User",
      "site_admin": false,
      "name": null,
      "company": null,
      "blog": "",
      "location": null,
      "email": null,
      "hireable": null,
      "bio": null,
      "public_repos": 13,
      "public_gists": 0,
      "followers": 1,
      "following": 1,
      "created_at": "2012-12-10T19:22:36Z",
      "updated_at": "2017-10-13T19:42:19Z"
    }
    const mockStore = configureStore();
    let store;
    store = mockStore(initialState);

    it('Components shallows without failing', () => {
       shallow(<ConnectedUser store={store} />);
    });

});
