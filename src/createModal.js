function toggleCreateModal() {
  const openModalButton = document.getElementById("open-modal-button");
  const createModal = document.getElementById("modal-create");
  const overlay = document.getElementById("overlay");
  const navBar = document.getElementById("navbar");
  const createTodoSectionTab = document.getElementById(
    "create-todo-section-tab"
  );
  const createProjectSectionTab = document.getElementById(
    "create-project-section-tab"
  );
  const modalCreateForm = document.getElementById("modal-create-form");

  overlay.addEventListener("click", () => {
    createModal.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  openModalButton.addEventListener("click", () => {
    createModal.classList.toggle("active");
    overlay.classList.toggle("active");
    navbar.classList.remove("active");
  });

  createTodoSectionTab.addEventListener("click", () => {
    modalCreateForm.id = "modal-create-form";
    modalCreateForm.innerHTML = `
      <input type="text" id="title" name="title" placeholder="Title">
      <input type="text" id="details" name="details" placeholder="Details">
      <div class="date-container">
          <label for="due-date">Due Date:</label>
          <input type="date" name="due-date" id="due-date">
      </div>
      <div class="priority-container">
          <label for="priority-container">Priority:</label>
          <div class="radio-container">
              <input type="radio" id="priority-low" name="priority" value="low">
              <label for="priority">Low</label>
          </div>
          <div class="radio-container">
              <input type="radio" id="priority-med" name="priority" value="med">
              <label for="priority">Medium</label>
          </div>
          <div class="radio-container">
              <input type="radio" id="priority-high" name="priority" value="high">
              <label for="priority">High</label>
          </div>
      </div>
      <input type="submit" value="Add To Do">
    `;
  });

  createProjectSectionTab.addEventListener("click", () => {
    modalCreateForm.id = "modal-create-project";
    modalCreateForm.innerHTML = `
        <input type="text" id="title" name="title" placeholder="Title">
        <input type="submit" value="Add New Project">
    `;
  });
}

export default toggleCreateModal;
