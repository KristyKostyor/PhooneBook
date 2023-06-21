import serviceStorage from "./modules/serviceStorage.js";
import { data } from './modules/serviceStorage.js';
import createElement from "./modules/createElements.js";
import render from './modules/render.js';
import control from './modules/control.js';

const { addContactPage,
    modalControl,
  deleteControl,
  formControl,
} = control;





const {
  renderContacts,
  renderPhoneBook,
} = render;

const {
  addContactData,
  saveContactsToLocalStorage,
  removeContactFromLocalStorage,
} = serviceStorage;

const {
  createHeader,
  createLogo,
  createMain,
  createFooter,
  createCopyRight,
  createButtonsGroup,
  createTable,
  sortTableByColumn,
  createForm,
  createRow,
} = createElement;


{

  const hoverRow = (allRow, logo) => {
    const text = logo.textContent;

    allRow.forEach((contact) => {
      contact.addEventListener("mouseenter", () => {
        logo.textContent = contact.phoneLink.textContent;
      });
      contact.addEventListener("mouseleave", () => {
        logo.textContent = text;
      });
    });
  };




  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);

    let savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      try {
        savedContacts = JSON.parse(savedContacts);
      } catch (error) {
        console.error("Ошибка при разборе JSON:", error);
        savedContacts = [];
      }
    } else {
      savedContacts = [];
    }

    const { list, logo, btnAdd, formOverlay, form, btnDel } = renderPhoneBook(
      app,
      title
    );

    const allRow = renderContacts(list, savedContacts);
    const { closeModal } = modalControl(btnAdd, formOverlay);
    hoverRow(allRow, logo);
    deleteControl(btnDel, list);
    formControl(form, list, closeModal);

    allRow.forEach((row) => {
      const buttonEdit = row.querySelector("td:last-child button");
      buttonEdit.addEventListener("click", handleEdit);
    });
  };

  function handleEdit(event) {
    console.log("Редактирование контакта");
  }

  window.phoneBookInit = init;
}
