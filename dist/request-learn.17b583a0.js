let e=async()=>await fetch("https://694ac93526e8707720669208.mockapi.io/presents").then(e=>e.json()).then(e=>document.getElementById("list").innerHTML=e.map(e=>`
        <li>
            <img src="${e.photo}">
            <h2>${e.title}</h2>
            <p>${e.description}</p>
            <p>Price: ${e.price}</p>
            <button class="delBtn" data-id="${e.id}">Delete</button>
        </li>
        `).join("")),t=async e=>await fetch(`https://694ac93526e8707720669208.mockapi.io/presents/${e}`,{method:"DELETE"}),a=async a=>{if(a.preventDefault(),"BUTTON"===a.target.nodeName){let n=a.target.dataset.id;await t(n),await e()}},n=async e=>await fetch("https://694ac93526e8707720669208.mockapi.io/presents",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json()),o=async t=>{if(t.preventDefault(),"BUTTON"===t.target.nodeName){let a=t.target.dataset.id;await n(a),await e()}};e();let c=document.querySelector(".list"),r=document.querySelector(".addBtn"),i=document.querySelector(".addFormBackground"),d=document.querySelector(".addBtnForm"),l=document.querySelector(".photoInput"),s=document.querySelector(".titleInput"),u=document.querySelector(".descriptionInput"),p=document.querySelector(".priceInput");r.addEventListener("click",e=>{e.preventDefault(),i.classList.toggle("addFormBackground"),i.classList.add("addFormBackgroundShow")}),d.addEventListener("form",async t=>{t.preventDefault();let a=l.value,n=s.value,c=u.value,r=Number(p.value);(0===a.length||0===n.length||0===c.length||0===r.length)&&console.log("Error with data");let i={photo:a,title:n,description:c,price:r};console.log(i),await o(i),await e()}),c.addEventListener("click",a);
//# sourceMappingURL=request-learn.17b583a0.js.map
