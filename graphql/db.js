import fetch from "node-fetch"
let API_URL = "https://www.food2fork.com/api/search?key=258a95d26965d38024d539e15e54c1cf"

export const getFood = () => {
    fetch(`${API_URL}`)
        .then(res => res.json())
        .then(json => json.recipes);
};