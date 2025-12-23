export const deletePresentApi = async(id) => {
    return await fetch(`https://694ac93526e8707720669208.mockapi.io/presents/${id}`, {
        method: "DELETE"
    })
}