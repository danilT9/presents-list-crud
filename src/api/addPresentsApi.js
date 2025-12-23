export const addPresentApi = async(present) => {
    return await fetch(`https://694ac93526e8707720669208.mockapi.io/presents`, {
        method: "POST",
        body: JSON.stringify(present),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    })
    .then(res => res.json())
}