/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createModal.js":
/*!****************************!*\
  !*** ./src/createModal.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction toggleCreateModal() {\n  const openModalButton = document.getElementById(\"open-modal-button\");\n  const createModal = document.getElementById(\"modal-create\");\n  const overlay = document.getElementById(\"overlay\");\n  const navBar = document.getElementById(\"navbar\");\n  const createTodoSectionTab = document.getElementById(\n    \"create-todo-section-tab\"\n  );\n  const createProjectSectionTab = document.getElementById(\n    \"create-project-section-tab\"\n  );\n  const modalCreateForm = document.getElementById(\"modal-create-form\");\n\n  overlay.addEventListener(\"click\", () => {\n    createModal.classList.toggle(\"active\");\n    overlay.classList.toggle(\"active\");\n  });\n\n  openModalButton.addEventListener(\"click\", () => {\n    createModal.classList.toggle(\"active\");\n    overlay.classList.toggle(\"active\");\n    navbar.classList.remove(\"active\");\n  });\n\n  createTodoSectionTab.addEventListener(\"click\", () => {\n    modalCreateForm.id = \"modal-create-form\";\n    modalCreateForm.innerHTML = `\n      <input type=\"text\" id=\"title\" name=\"title\" placeholder=\"Title\">\n      <input type=\"text\" id=\"details\" name=\"details\" placeholder=\"Details\">\n      <div class=\"date-container\">\n          <label for=\"due-date\">Due Date:</label>\n          <input type=\"date\" name=\"due-date\" id=\"due-date\">\n      </div>\n      <div class=\"priority-container\">\n          <label for=\"priority-container\">Priority:</label>\n          <div class=\"radio-container\">\n              <input type=\"radio\" id=\"priority-low\" name=\"priority\" value=\"low\">\n              <label for=\"priority\">Low</label>\n          </div>\n          <div class=\"radio-container\">\n              <input type=\"radio\" id=\"priority-med\" name=\"priority\" value=\"med\">\n              <label for=\"priority\">Medium</label>\n          </div>\n          <div class=\"radio-container\">\n              <input type=\"radio\" id=\"priority-high\" name=\"priority\" value=\"high\">\n              <label for=\"priority\">High</label>\n          </div>\n      </div>\n      <input type=\"submit\" value=\"Add To Do\">\n    `;\n  });\n\n  createProjectSectionTab.addEventListener(\"click\", () => {\n    modalCreateForm.id = \"modal-create-project\";\n    modalCreateForm.innerHTML = `\n        <input type=\"text\" id=\"title\" name=\"title\" placeholder=\"Title\">\n        <input type=\"submit\" value=\"Add New Project\">\n    `;\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleCreateModal);\n\n\n//# sourceURL=webpack://project-todo-list/./src/createModal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navBar */ \"./src/navBar.js\");\n/* harmony import */ var _createModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createModal */ \"./src/createModal.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation */ \"./src/navigation.js\");\n\n\n\n\n// Navbar toggle logic\n(0,_navBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n// create modal logic\n(0,_createModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nwindow.onload = function () {\n  // project navigation\n  (0,_navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n};\n\n\n//# sourceURL=webpack://project-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/navBar.js":
/*!***********************!*\
  !*** ./src/navBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction toggleNavBar() {\n  const toggleButton = document.getElementById(\"toggle-button\");\n  const navBar = document.getElementById(\"navbar\");\n  const overlay = document.getElementById(\"overlay\");\n\n  toggleButton.addEventListener(\"click\", () => {\n    navBar.classList.toggle(\"active\");\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleNavBar);\n\n\n//# sourceURL=webpack://project-todo-list/./src/navBar.js?");

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _updateListsDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateListsDOM */ \"./src/updateListsDOM.js\");\n\n\nfunction projectNavigation() {\n  // reference html elements\n  const homeTab = document.getElementById(\"homeTab\");\n  const todayTab = document.getElementById(\"todayTab\");\n  const weekTab = document.getElementById(\"weekTab\");\n\n  // track all the tabs\n  const tab_list_tracker = {\n    homeTab: [],\n    todayTab: [],\n    weekTab: [],\n  };\n\n  // keep track of current tab\n  let current_tab = homeTab;\n  current_tab.classList.add(\"active\");\n  createToDoLogic();\n\n  // tab array\n  const tabArray = [homeTab, todayTab, weekTab];\n\n  tabArray.forEach((tab) => {\n    tab.addEventListener(\"click\", tabHandler);\n  });\n\n  function tabHandler(e) {\n    current_tab.classList.remove(\"active\");\n    current_tab = e.target;\n    current_tab.classList.add(\"active\");\n\n    // updating DOM\n    (0,_updateListsDOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tab_list_tracker[`${current_tab.id}`]);\n\n    // list logic\n    listLogic();\n  }\n\n  // create list logic\n  createToDoLogic();\n\n  // todo-item class\n  class TodoItem {\n    constructor(title, details, dueDate, priority) {\n      this.title = title;\n      this.details = details;\n      this.dueDate = dueDate;\n      this.priority = priority;\n    }\n  }\n\n  function createToDoLogic() {\n    // html elements\n    const createModal = document.getElementById(\"modal-create\");\n    const overlay = document.getElementById(\"overlay\");\n\n    // reference html elements\n    const addTodo = document.querySelector(\"#modal-create-form\");\n    const addProject = document.querySelector(\"#modal-create-project\");\n    const projectListHTML = document.getElementById(\"project-list\");\n\n    // form submission logic\n    addTodo.addEventListener(\"submit\", addTodoFunction);\n\n    // add project\n    function addProjectFunction(e) {\n      // prevent page from refreshing\n      e.preventDefault();\n\n      // get the info from the form\n      const title = this.querySelector(\"input[name=title]\").value || \"\";\n\n      // add to html\n      console.log(title);\n    }\n\n    // add to do function\n    function addTodoFunction(e) {\n      // prevent page from refreshing\n      e.preventDefault();\n\n      // get the info from the form\n      const title = this.querySelector(\"input[name=title]\").value || \"\";\n      const details = this.querySelector(\"input[name=details]\").value || \"\";\n      const dueDate = this.querySelector(\"input[name=due-date]\").value || \"\";\n      const priority =\n        this.querySelector(\"input[name=priority]:checked\").value || \"\";\n\n      let todoItem = new TodoItem(title, details, dueDate, priority);\n      tab_list_tracker[`${current_tab.id}`].push(todoItem);\n\n      // updating DOM\n      (0,_updateListsDOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tab_list_tracker[`${current_tab.id}`]);\n\n      // list logic\n      listLogic();\n\n      // reset form\n      addTodo.reset();\n\n      // hide modal and overlay\n      createModal.classList.remove(\"active\");\n      overlay.classList.remove(\"active\");\n    }\n  }\n\n  function listLogic() {\n    // getting list\n    const lists = document.querySelectorAll(\".list\");\n\n    // convert to array\n    const listElements = [...lists];\n\n    // checkbox logic\n    listElements.forEach((list, index) => {\n      list.children[0].children[1].addEventListener(\"click\", () => {\n        // get list element from DOM\n        const listElement = document.querySelector(\".list\" + index);\n        listElement.classList.toggle(\"active\");\n      });\n\n      // Display details on todo\n      listElements.forEach((list, index) => {\n        list.children[1].children[0].addEventListener(\"click\", () => {\n          // details\n          const detailsContainer = document.getElementById(\"details-container\");\n          const overlay = document.getElementById(\"overlay\");\n          const createModal = document.getElementById(\"modal-create\");\n\n          // update title\n          detailsContainer.children[0].innerHTML =\n            \"Title: \" + tab_list_tracker[`${current_tab.id}`][index].title;\n          // update project TODO\n\n          // update priority\n          detailsContainer.children[2].children[1].innerHTML =\n            tab_list_tracker[`${current_tab.id}`][index].priority;\n          // update due date\n          detailsContainer.children[3].children[1].innerHTML =\n            tab_list_tracker[`${current_tab.id}`][index].dueDate;\n          // update details\n          detailsContainer.children[4].children[1].innerHTML =\n            tab_list_tracker[`${current_tab.id}`][index].details;\n\n          // details container logic\n          detailsContainer.classList.add(\"active\");\n          overlay.classList.add(\"active\");\n\n          // overlay logic\n          overlay.addEventListener(\"click\", () => {\n            detailsContainer.classList.remove(\"active\");\n            overlay.classList.remove(\"active\");\n            createModal.classList.remove(\"active\");\n          });\n        });\n      });\n\n      // Edit todo\n      listElements.forEach((list, index) => {\n        // access list edit details button\n        list.children[1].children[2].addEventListener(\n          \"click\",\n          function handler() {\n            // open edit details modal\n            const editDetailsContainer = document.getElementById(\n              \"edit-details-container\"\n            );\n            const overlay = document.getElementById(\"overlay\");\n            const createModal = document.getElementById(\"modal-create\");\n            // populate edit details modal with list array data\n            // title\n            editDetailsContainer.children[0].children[1].value =\n              tab_list_tracker[`${current_tab.id}`][index].title;\n\n            // details\n            editDetailsContainer.children[0].children[2].value =\n              tab_list_tracker[`${current_tab.id}`][index].details;\n\n            // due date\n            editDetailsContainer.children[0].children[3].value =\n              tab_list_tracker[`${current_tab.id}`][index].dueDate;\n\n            // priority\n            if (\n              tab_list_tracker[`${current_tab.id}`][index].priority == \"low\"\n            ) {\n              editDetailsContainer.children[0].children[4].children[1].children[0].checked = true;\n            } else if (\n              tab_list_tracker[`${current_tab.id}`][index].priority == \"med\"\n            ) {\n              editDetailsContainer.children[0].children[4].children[2].children[0].checked = true;\n            } else {\n              editDetailsContainer.children[0].children[4].children[3].children[0].checked = true;\n            }\n\n            // Edit button\n            editDetailsContainer.addEventListener(\"submit\", handleEdit);\n\n            // edit details container logic\n            editDetailsContainer.classList.add(\"active\");\n            overlay.classList.add(\"active\");\n\n            // overlay logic\n            overlay.addEventListener(\"click\", () => {\n              editDetailsContainer.classList.remove(\"active\");\n              overlay.classList.remove(\"active\");\n              createModal.classList.remove(\"active\");\n            });\n\n            function handleEdit(e) {\n              // prevent page from refreshing\n              e.preventDefault();\n\n              // get the info from the form\n              const title = this.querySelector(\"input[name=title-edit]\").value;\n              const details = this.querySelector(\n                \"input[name=details-edit]\"\n              ).value;\n              const dueDate = this.querySelector(\n                \"input[name=due-date-edit]\"\n              ).value;\n              const priority = this.querySelector(\n                \"input[name=priority-edit]:checked\"\n              ).value;\n\n              // update the array\n              tab_list_tracker[`${current_tab.id}`][index].title = title;\n              tab_list_tracker[`${current_tab.id}`][index].details = details;\n              tab_list_tracker[`${current_tab.id}`][index].dueDate = dueDate;\n              tab_list_tracker[`${current_tab.id}`][index].priority = priority;\n\n              // need to run list logic code again for specific list\n              (0,_updateListsDOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tab_list_tracker[`${current_tab.id}`]);\n              listLogic(tab_list_tracker[`${current_tab.id}`]);\n\n              editDetailsContainer.classList.remove(\"active\");\n              overlay.classList.remove(\"active\");\n            }\n          }\n        );\n      });\n\n      // Delete todo\n      listElements.forEach((list, index) => {\n        // access list delete button\n        list.children[1].children[3].addEventListener(\n          \"click\",\n          function handler() {\n            // prevent second click\n            list.children[1].children[3].removeEventListener(\"click\", handler);\n            // update array\n            tab_list_tracker[`${current_tab.id}`].splice(index, 1);\n            // delete list\n            list.remove();\n          }\n        );\n      });\n    });\n    return;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectNavigation);\n\n\n//# sourceURL=webpack://project-todo-list/./src/navigation.js?");

/***/ }),

/***/ "./src/updateListsDOM.js":
/*!*******************************!*\
  !*** ./src/updateListsDOM.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction updateListsDOM(todoItemArray) {\n  // refer to HTML element\n  const containerList = document.getElementById(\"container-lists\");\n\n  containerList.innerHTML = todoItemArray\n    .map((todo, i) => {\n      return `\n    <div class=\"list list${i}\">\n        <div class=\"list-upper\">\n            <div class=\"priority-box ${todo.priority}\"></div>\n            <input type=\"checkbox\" id=\"item${i}\" name=\"item${i}\">\n            <label for=\"item${i}\"> ${todo.title} </label><br>\n        </div>\n        <div class=\"list-lower\">\n            <button class=\"button-details\">Details</button>\n            <span class=\"date-container\">${todo.dueDate}</span>\n            <button class=\"button-edit\"><svg xmlns=\"http://www.w3.org/2000/svg\"\n                    class=\"icon icon-tabler icon-tabler-edit\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"\n                    stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\"\n                    stroke-linejoin=\"round\">\n                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                    <path d=\"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1\"></path>\n                    <path d=\"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z\"></path>\n                    <path d=\"M16 5l3 3\"></path>\n                </svg>\n            </button>\n            <button class=\"button-delete\"><svg xmlns=\"http://www.w3.org/2000/svg\"\n                    class=\"icon icon-tabler icon-tabler-file-x\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"\n                    stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\"\n                    stroke-linejoin=\"round\">\n                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                    <path d=\"M14 3v4a1 1 0 0 0 1 1h4\"></path>\n                    <path d=\"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z\"></path>\n                    <path d=\"M10 12l4 4m0 -4l-4 4\"></path>\n                </svg>\n            </button>\n        </div>\n    </div>\n    `;\n    })\n    .join(\"\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateListsDOM);\n\n\n//# sourceURL=webpack://project-todo-list/./src/updateListsDOM.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;