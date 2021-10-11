document.getElementById("add-button").addEventListener("click", ()=> {
    let inputValue = document.getElementById("favchap").value;
    if(inputValue !== "") {
        const delButton = document.createElement("button");
        delButton.innerHTML = "\u274C";
        delButton.addEventListener("click", (e) => {
            let li = e.target.closest('li')
            li.remove();
            document.getElementById("favchap").focus();
        })

        const newListItem = document.createElement("li");
        newListItem.textContent = `${inputValue} `;
        newListItem.appendChild(delButton);

        document.getElementById("list").appendChild(newListItem);
        document.getElementById("favchap").value = "";
    }
    document.getElementById("favchap").focus();
})