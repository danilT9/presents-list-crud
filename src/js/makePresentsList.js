export const makePresentsList = (data) => {
    const list = document.getElementById("list");
    const newPresents = data.map(pr => `
        <li>
            <img src="${pr.photo}">
            <h2>${pr.title}</h2>
            <p>${pr.description}</p>
            <p>Price: ${pr.price}</p>
            <button class="delBtn">Delete</button>
        </li>
        `).join('');
    return list.innerHTML = newPresents;
}