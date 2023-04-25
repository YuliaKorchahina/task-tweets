import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6442462a33997d3ef90c1fd4.mockapi.io/api/v13/',
});

export const getUser = async () => {
  try {
    const { data } = await instance.get('/users');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (id, isFollowing, newFollowers) => {
  try {
    const { data } = await instance.put(`/users/${id}`, {
      followers: newFollowers,
      // isFollow: isFollowing,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
