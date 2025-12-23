import { getPresentsApi } from "./api/getPresentsApi.js";
import { deletePresent } from "./js/deletePresent.js";
import { addPresent } from "./js/addPresent.js";

getPresentsApi();

const presentsList = document.querySelector(".list");
const addBtn = document.querySelector(".addBtn");
const addForm = document.querySelector(".addFormBackground")
const addBtnForm = document.querySelector(".addBtnForm");
const photoInput = document.querySelector(".photoInput");
const titleInput = document.querySelector(".titleInput");
const descriptionInput = document.querySelector(".descriptionInput");
const priceInput = document.querySelector(".priceInput");

addBtn.addEventListener("click", e => {
    e.preventDefault();
    addForm.classList.toggle("addFormBackground")
    addForm.classList.add("addFormBackgroundShow")
});

addBtnForm.addEventListener("form", async (e) => {
    e.preventDefault();
    const photoValue = photoInput.value;
    const titleValue = titleInput.value;
    const descriptionValue = descriptionInput.value;
    const priceValue = priceInput.value;
    if (photoValue.length === 0 || titleValue.length === 0 || descriptionValue.length === 0 || priceValue.length === 0) {
        console.log("Error with data");
    }
    const id = String(Math.random() * 10000)
    const data = {
        photo: photoValue,
        title: titleValue,
        description: descriptionValue,
        price: priceValue,
        id: id
    }
    await addPresent(data);
    await getPresentsApi();
})

presentsList.addEventListener("click", deletePresent);