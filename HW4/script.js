"use strict";

const url = "https://jsonplaceholder.typicode.com/users";

async function getData(url) {
    const res = await fetch(url);
    return await res.json();
};
try {
    const data = await getData(url);
    const bodyEl = document.querySelector(".task1");
    data.forEach(item => {
        bodyEl.insertAdjacentHTML(`beforeend`,
            `<div class="task1-item">
        <p class="task1-item__name">${item.name}</p>
        <p class="task1-item__userName">${item.username}</p>
        <p class="task1-item__email">${item.email}</p>
        <p class="task1-item__address">${item.address.street}, ${item.address.suite}</p>
        <p class="task1-item__phone">${item.phone}</p>
        <p class="task1-item__remove">удалить</p>
    </div>`);
    });
    const containerEl = document.querySelectorAll(".task1-item");
    containerEl.forEach(item => {
        const delItem = item.querySelector(".task1-item__remove");
        delItem.addEventListener("click", () => {
            item.remove();
            console.log(item.textContent + " removed.");
        });
    });
} catch (error) {
    console.log("Error");
};

const url2 = "https://dog.ceo/api/breeds/image/random";

try {
    const bodyEl = document.querySelector(".task2");
    const timeoutPromise = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));
    for (let i = 0; i < 10; i++) {
        const data = await getData(url2);
        let dog = document.createElement("img");
        dog.src = data.message;
        bodyEl.appendChild(dog);
        await timeoutPromise(3000);
    }
} catch (error) {
    console.log("Error");
};