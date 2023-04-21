import axios from "axios";

const instance = axios.create({
    baseURL: "https://6442462a33997d3ef90c1fd4.mockapi.io/api/v13/"
});

export const getUser = async() => {
    const {data} = await instance.get("/users");
    return data;
}

