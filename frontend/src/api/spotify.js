/* eslint-disable camelcase */
import axios from 'axios';

export const getSpotifyUserId = async (accessToken) => {
  const url = 'https://api.spotify.com/v1/me';
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + accessToken,
  };

  const response = await axios.get(url, { method: 'GET', headers: headers });
  return response.data.id;
};
