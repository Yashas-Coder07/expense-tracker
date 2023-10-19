const amount = document.getElementById("amount");
const dd = document.getElementById("drop-down");
const desc = document.getElementById("catogery");
const form = document.querySelector("form")
const items = document.querySelector(".items")

let data = [];


function createButton(classes, num) {
    const button = document.createElement('button');
    button.className = classes;
    if (num === 1) {
        button.innerHTML = "Delete";
        button.id = "del";

    }
    else {
        button.innerHTML = "Edit";
        button.id = "edit"
    }
    return button;
}



form.addEventListener("submit", (e) => {
    e.preventDefault();

    var li = document.createElement("li");
    li.innerHTML = `${amount.value} - ${desc.value} - ${dd.value} - `;

    document.querySelector(".items").appendChild(li);

    const delButton = createButton("btn btn-outline-secondary", 1);
    li.appendChild(delButton);


    const editButton = createButton("btn btn-primary", 2);
    li.appendChild(editButton);

    document.querySelector(".items").appendChild(li);

    data.push(dd.value);
    data.push(desc.value);
    data.push(amount.value);




    localStorage.setItem(desc.value, JSON.stringify(data));

    amount.value = "";
    dd.value = "";
    desc.value = "";

});




items.addEventListener("click", (e) => {

    if (e.target.id === "del") {

        var item = e.target.parentElement;


        removeLocalStorage(e.target.parentElement);
        item.remove();
    }
    else if (e.target.id === "edit") {

        setIntemToEdit(e.target.parentElement);
        e.target.parentElement.remove();

    }

})


function setIntemToEdit(item) {
    const items = item.textContent;
    const ite = items.split("-");
    console.log(ite[0]);
    amount.value = parseInt(ite[0]);
    desc.value = ite[1];

}

function removeLocalStorage(item) {
    const items = item.textContent;
    const ite = items.split("-")
    const removeItem = ite[1];
    localStorage.removeItem(removeItem);
}
