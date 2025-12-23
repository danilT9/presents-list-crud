import { getPresentsApi } from "../api/getPresentsApi.js";
import { deletePresentApi } from "../api/deletePresentsApi.js";

export const deletePresent = async (e) => {
    e.preventDefault();
    if (e.target.nodeName === "BUTTON") {
        const id = e.target.dataset.id
        await deletePresentApi(id);
        await getPresentsApi();
    }
}