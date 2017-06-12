const API_URL = '/api/plaid';

export default {
  getAccessToken(publicToken) {
    return fetch(`${API_URL}/get_access_token`, {
      method: 'POST',
      body: JSON.stringify(publicToken),
      headers: new Headers({'Content-Type':'application/json'})

    })
      .then(res => res.json());
  },

  postAccessToken() {
    return fetch(`${API_URL}/get-access-token`)
      .then(res => res.json());
  },
};