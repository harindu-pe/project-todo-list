import updateListsDOM from "./updateListsDOM";

function listLogic(todoItemArray) {
  // getting list
  const lists = document.querySelectorAll(".list");

  // convert to array
  const listElements = [...lists];

  // checkbox logic
  listElements.forEach((list, index) => {
    list.children[0].children[1].addEventListener("click", () => {
      // get list element from DOM
      const listElement = document.querySelector(".list" + index);
      listElement.classList.toggle("active");
    });

    // Display details on todo
    listElements.forEach((list, index) => {
      list.children[1].children[0].addEventListener("click", () => {
        // details
        const detailsContainer = document.getElementById("details-container");
        const overlay = document.getElementById("overlay");
        const createModal = document.getElementById("modal-create");

        // update title
        detailsContainer.children[0].innerHTML =
          "Title: " + todoItemArray[index].title;
        // update project TODO

        // update priority
        detailsContainer.children[2].children[1].innerHTML =
          todoItemArray[index].priority;
        // update due date
        detailsContainer.children[3].children[1].innerHTML =
          todoItemArray[index].dueDate;
        // update details
        detailsContainer.children[4].children[1].innerHTML =
          todoItemArray[index].details;

        // details container logic
        detailsContainer.classList.add("active");
        overlay.classList.add("active");

        // overlay logic
        overlay.addEventListener("click", () => {
          detailsContainer.classList.remove("active");
          overlay.classList.remove("active");
          createModal.classList.remove("active");
        });
      });
    });

    // Edit todo
    listElements.forEach((list, index) => {
      // access list edit details button
      list.children[1].children[2].addEventListener(
        "click",
        function handler() {
          // open edit details modal
          const editDetailsContainer = document.getElementById(
            "edit-details-container"
          );
          const overlay = document.getElementById("overlay");
          const createModal = document.getElementById("modal-create");
          // populate edit details modal with list array data
          // title
          editDetailsContainer.children[0].children[1].value =
            todoItemArray[index].title;

          // details
          editDetailsContainer.children[0].children[2].value =
            todoItemArray[index].details;

          // due date
          editDetailsContainer.children[0].children[3].value =
            todoItemArray[index].dueDate;

          // priority
          if (todoItemArray[index].priority == "low") {
            editDetailsContainer.children[0].children[4].children[1].children[0].checked = true;
          } else if (todoItemArray[index].priority == "med") {
            editDetailsContainer.children[0].children[4].children[2].children[0].checked = true;
          } else {
            editDetailsContainer.children[0].children[4].children[3].children[0].checked = true;
          }

          // Edit button
          editDetailsContainer.addEventListener("submit", handleEdit);

          // edit details container logic
          editDetailsContainer.classList.add("active");
          overlay.classList.add("active");

          // overlay logic
          overlay.addEventListener("click", () => {
            editDetailsContainer.classList.remove("active");
            overlay.classList.remove("active");
            createModal.classList.remove("active");
          });

          function handleEdit(e) {
            // prevent page from refreshing
            e.preventDefault();

            // get the info from the form
            const title = this.querySelector("input[name=title-edit]").value;
            const details = this.querySelector(
              "input[name=details-edit]"
            ).value;
            const dueDate = this.querySelector(
              "input[name=due-date-edit]"
            ).value;
            const priority = this.querySelector(
              "input[name=priority-edit]:checked"
            ).value;

            // update the array
            todoItemArray[index].title = title;
            todoItemArray[index].details = details;
            todoItemArray[index].dueDate = dueDate;
            todoItemArray[index].priority = priority;

            // need to run list logic code again for specific list
            updateListsDOM(todoItemArray);
            listLogic(todoItemArray);

            editDetailsContainer.classList.remove("active");
            overlay.classList.remove("active");
          }
        }
      );
    });

    // Delete todo
    listElements.forEach((list, index) => {
      // access list delete button
      list.children[1].children[3].addEventListener(
        "click",
        function handler() {
          // prevent second click
          list.children[1].children[3].removeEventListener("click", handler);
          // update array
          todoItemArray.splice(index, 1);
          // delete list
          list.remove();
        }
      );
    });
  });
  return;
}

export default listLogic;
