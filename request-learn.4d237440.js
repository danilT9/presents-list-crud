fetch("https://694ac93526e8707720669208.mockapi.io/presents").then(t=>t.json()).then(t=>document.getElementById("list").innerHTML=t.map(t=>`
        <li>
            <img src="${t.photo}">
            <h2>${t.title}</h2>
            <p>${t.description}</p>
            <p>Price: ${t.price}</p>
            <button class="delBtn">Delete</button>
        </li>
        `).join(""));
//# sourceMappingURL=request-learn.4d237440.js.map
