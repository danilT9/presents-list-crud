import { getPresentsApi } from "../api/getPresentsApi.js";
import { addPresentApi } from "../api/addPresentsApi.js";

export const addPresent = async (e) => {
    e.preventDefault();
    if (e.target.nodeName === "BUTTON") {
        const id = e.target.dataset.id
        await addPresentApi(id);
        await getPresentsApi();
    }
}