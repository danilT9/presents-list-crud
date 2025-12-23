let e=async()=>await fetch("https://694ac93526e8707720669208.mockapi.io/presents").then(e=>e.json()).then(e=>document.getElementById("list").innerHTML=e.map(e=>`
        <li>
            <img src="${e.photo}">
            <h2>${e.title}</h2>
            <p>${e.description}</p>
            <p>Price: ${e.price}</p>
            <button class="delBtn" data-id="${e.id}">Delete</button>
        </li>
        `).join("")),t=async e=>await fetch(`https://694ac93526e8707720669208.mockapi.io/presents/${e}`,{method:"DELETE"}),a=async a=>{if(a.preventDefault(),"BUTTON"===a.target.nodeName){let n=a.target.dataset.id;await t(n),await e()}},n=async e=>await fetch("https://694ac93526e8707720669208.mockapi.io/presents",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json()),o=async t=>{if(t.preventDefault(),"BUTTON"===t.target.nodeName){let a=t.target.dataset.id;await n(a),await e()}};e();let i=document.querySelector(".list"),r=document.querySelector(".addBtn"),c=document.querySelector(".addFormBackground"),d=document.querySelector(".addBtnForm"),l=document.querySelector(".photoInput"),s=document.querySelector(".titleInput"),p=document.querySelector(".descriptionInput"),u=document.querySelector(".priceInput");r.addEventListener("click",e=>{e.preventDefault(),c.classList.toggle("addFormBackground"),c.classList.add("addFormBackgroundShow")}),d.addEventListener("form",async t=>{t.preventDefault();let a=l.value,n=s.value,i=p.value,r=u.value;(0===a.length||0===n.length||0===i.length||0===r.length)&&console.log("Error with data");let c=String(1e4*Math.random());await o({photo:a,title:n,description:i,price:r,id:c}),await e()}),i.addEventListener("click",a);
//# sourceMappingURL=request-learn.1dee8ea6.js.map
