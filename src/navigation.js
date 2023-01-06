import updateListsDOM from "./updateListsDOM";

function projectNavigation() {
  // reference html elements
  const homeTab = document.getElementById("homeTab");
  const todayTab = document.getElementById("todayTab");
  const weekTab = document.getElementById("weekTab");

  // track all the tabs
  const tab_list_tracker = {
    homeTab: [],
    todayTab: [],
    weekTab: [],
  };

  // keep track of current tab
  let current_tab = homeTab;
  current_tab.classList.add("active");
  createToDoLogic();

  // tab array
  const tabArray = [homeTab, todayTab, weekTab];

  tabArray.forEach((tab) => {
    tab.addEventListener("click", tabHandler);
  });

  function tabHandler(e) {
    current_tab.classList.remove("active");
    current_tab = e.target;
    current_tab.classList.add("active");

    // updating DOM
    updateListsDOM(tab_list_tracker[`${current_tab.id}`]);

    // list logic
    listLogic();
  }

  // create list logic
  createToDoLogic();

  // todo-item class
  class TodoItem {
    constructor(title, details, dueDate, priority) {
      this.title = title;
      this.details = details;
      this.dueDate = dueDate;
      this.priority = priority;
    }
  }

  function createToDoLogic() {
    // html elements
    const createModal = document.getElementById("modal-create");
    const overlay = document.getElementById("overlay");

    // reference html elements
    const addTodo = document.querySelector("#modal-create-form");
    const addProject = document.querySelector("#modal-create-project");
    const projectListHTML = document.getElementById("project-list");

    // form submission logic
    addTodo.addEventListener("submit", addTodoFunction);

    // add project
    function addProjectFunction(e) {
      // prevent page from refreshing
      e.preventDefault();

      // get the info from the form
      const title = this.querySelector("input[name=title]").value || "";

      // add to html
      console.log(title);
    }

    // add to do function
    function addTodoFunction(e) {
      // prevent page from refreshing
      e.preventDefault();

      // get the info from the form
      const title = this.querySelector("input[name=title]").value || "";
      const details = this.querySelector("input[name=details]").value || "";
      const dueDate = this.querySelector("input[name=due-date]").value || "";
      const priority =
        this.querySelector("input[name=priority]:checked").value || "";

      let todoItem = new TodoItem(title, details, dueDate, priority);
      tab_list_tracker[`${current_tab.id}`].push(todoItem);

      // updating DOM
      updateListsDOM(tab_list_tracker[`${current_tab.id}`]);

      // list logic
      listLogic();

      // reset form
      addTodo.reset();

      // hide modal and overlay
      createModal.classList.remove("active");
      overlay.classList.remove("active");
    }
  }

  function listLogic() {
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
            "Title: " + tab_list_tracker[`${current_tab.id}`][index].title;
          // update project TODO

          // update priority
          detailsContainer.children[2].children[1].innerHTML =
            tab_list_tracker[`${current_tab.id}`][index].priority;
          // update due date
          detailsContainer.children[3].children[1].innerHTML =
            tab_list_tracker[`${current_tab.id}`][index].dueDate;
          // update details
          detailsContainer.children[4].children[1].innerHTML =
            tab_list_tracker[`${current_tab.id}`][index].details;

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
              tab_list_tracker[`${current_tab.id}`][index].title;

            // details
            editDetailsContainer.children[0].children[2].value =
              tab_list_tracker[`${current_tab.id}`][index].details;

            // due date
            editDetailsContainer.children[0].children[3].value =
              tab_list_tracker[`${current_tab.id}`][index].dueDate;

            // priority
            if (
              tab_list_tracker[`${current_tab.id}`][index].priority == "low"
            ) {
              editDetailsContainer.children[0].children[4].children[1].children[0].checked = true;
            } else if (
              tab_list_tracker[`${current_tab.id}`][index].priority == "med"
            ) {
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
              tab_list_tracker[`${current_tab.id}`][index].title = title;
              tab_list_tracker[`${current_tab.id}`][index].details = details;
              tab_list_tracker[`${current_tab.id}`][index].dueDate = dueDate;
              tab_list_tracker[`${current_tab.id}`][index].priority = priority;

              // need to run list logic code again for specific list
              updateListsDOM(tab_list_tracker[`${current_tab.id}`]);
              listLogic(tab_list_tracker[`${current_tab.id}`]);

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
            tab_list_tracker[`${current_tab.id}`].splice(index, 1);
            // delete list
            list.remove();
          }
        );
      });
    });
    return;
  }
}

export default projectNavigation;
