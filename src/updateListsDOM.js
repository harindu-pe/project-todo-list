function updateListsDOM(todoItemArray) {
  // refer to HTML element
  const containerList = document.getElementById("container-lists");

  containerList.innerHTML = todoItemArray
    .map((todo, i) => {
      return `
    <div class="list list${i}">
        <div class="list-upper">
            <div class="priority-box ${todo.priority}"></div>
            <input type="checkbox" id="item${i}" name="item${i}">
            <label for="item${i}"> ${todo.title} </label><br>
        </div>
        <div class="list-lower">
            <button class="button-details">Details</button>
            <span class="date-container">${todo.dueDate}</span>
            <button class="button-edit"><svg xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24"
                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                    <path d="M16 5l3 3"></path>
                </svg>
            </button>
            <button class="button-delete"><svg xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-file-x" width="24" height="24" viewBox="0 0 24 24"
                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                    <path d="M10 12l4 4m0 -4l-4 4"></path>
                </svg>
            </button>
        </div>
    </div>
    `;
    })
    .join("");
}

export default updateListsDOM;
