document.addEventListener("DOMContentLoaded", function () {
    var ul = document.getElementById("list");
    var li;
    var addButton = document.getElementById("add");
    addButton.addEventListener("click", addItem);
    var removeButton = document.getElementById("remove");
    removeButton.addEventListener("click", removeItem);

    function createEditButton() {
        var editButton = document.createElement("button");
        editButton.classList.add("editBtn");
        editButton.textContent = "Edit";
        return editButton;
    }

    function addEditButton(li) {
        var editButton = createEditButton();
        li.appendChild(editButton);

        editButton.addEventListener("click", function () {
            var label = li.querySelector("label");
            var updatedText = prompt("Edit task:", label.textContent);
            if (updatedText !== null) {
                label.textContent = updatedText;
            }
        });
    }

    function createTaskElement(text) {
        var listItem = document.createElement("li");
        listItem.classList.add("mycheck");

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        listItem.appendChild(checkbox);

        var label = document.createElement("label");
        label.textContent = text;
        listItem.appendChild(label);

        // Add Edit button
        addEditButton(listItem);

        return listItem;
    }

    function addItem() {
        var input = document.getElementById("input");
        var item = input.value.trim();

        if (item === "") {
            alert("Empty Todo cannot be added");
        } else {
            var newTask = createTaskElement(item);
            ul.appendChild(newTask);

            setTimeout(() => {
                newTask.className = "visual";
            }, 2);

            input.value = "";
        }
    }


        function removeItem() {
            li = ul.children;
          
            for (let index = 0; index < li.length; index++) {
              while (li[index] && li[index].children[0].checked) {
                ul.removeChild(li[index]);
              }
            }
          }
        
    
});
