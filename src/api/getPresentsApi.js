import {makePresentsList} from "../js/makePresentsList"

export const getPresentsApi = async() => {
    return await fetch("https://694ac93526e8707720669208.mockapi.io/presents")
    .then(res => res.json())
    .then(presents => makePresentsList(presents))
}