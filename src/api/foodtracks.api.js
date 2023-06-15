import axios from "axios";

const foodtracksApi = axios.create({
    baseURL: "https://tastely-api.onrender.com/tastely/api/v1/foodtracks/",
});

export const getAllFoodTracks = () => {
    return foodtracksApi.get("/");
};

export const getFoodTrack = (id) => {
    return foodtracksApi.get(`/${id}`);
};

export const createFoodTrack = (foodtrack) => {
    return foodtracksApi.post("/", foodtrack);
};

export const deleteFoodTrack = (id) => {
    return foodtracksApi.delete(`/${id}`);
};

export const updateFoodTrack = (id, foodtrack) => {
    return foodtracksApi.put(`/${id}/`, foodtrack);
};

export const filterByCol = (id, col, filter) => {
    return foodtracksApi.get(``);
};
