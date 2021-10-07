import axios from 'axios';

export const fetcher = async () => {
  const res = await axios.get('http://localhost:4000/api/users', {
    withCredentials: true,
  });
  return res.data;
};
