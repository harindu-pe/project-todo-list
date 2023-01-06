import toggleNavBar from "./navBar";
import toggleCreateModal from "./createModal";
import projectNavigation from "./navigation";

// Navbar toggle logic
toggleNavBar();

// create modal logic
toggleCreateModal();

window.onload = function () {
  // project navigation
  projectNavigation();
};
