import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6442462a33997d3ef90c1fd4.mockapi.io/api/v13/',
});

export const getUser = async page => {
  try {
    const { data } = await instance.get(`/users?page=${page}&limit=3`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (id, followers, isFollow) => {
  try {
    const { data } = await instance.put(`/users/${id}`, {
      followers,
      isFollow,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
