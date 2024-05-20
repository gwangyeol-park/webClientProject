import axios from "axios";

// item Data를 받아오는 api의 url
const ITEMS_API_URL = 'http://localhost:8080/items';

class ItemService {
    getItems() {
        return axios.get(ITEMS_API_URL);
    }

    getItemsByUserName(userName) {
        return axios.get(ITEMS_API_URL + "/myPage/" + userName);
    }

    getItemById(id) {
        // console.log(ITEMS_GET_URL + "/" + id);
        return axios.get(ITEMS_API_URL + "/" + id);
    }

    deleteItemById(id) {
        return axios.delete(ITEMS_API_URL + "/" + id);
    }

    updateItem(id, item) {
        return axios.put(ITEMS_API_URL + "/" + id, item);
    }

    postItem(item) {
        return axios.post(ITEMS_API_URL, item);
    }
}

export default new ItemService();