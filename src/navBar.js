function toggleNavBar() {
  const toggleButton = document.getElementById("toggle-button");
  const navBar = document.getElementById("navbar");
  const overlay = document.getElementById("overlay");

  toggleButton.addEventListener("click", () => {
    navBar.classList.toggle("active");
  });
}

export default toggleNavBar;
