import { control } from "./modules/control.js";
import { createElement } from './modules/createElements.js';
import { render } from './modules/render.js';
import { serviceStorage } from './modules/serviceStorage';


const data = [
  {
    name: "Иван",
    surname: "Петров",
    phone: "+79514545454",
  },
  {
    name: "Игорь",
    surname: "Семёнов",
    phone: "+79999999999",
  },
  {
    name: "Семён",
    surname: "Иванов",
    phone: "+79800252525",
  },
  {
    name: "Мария",
    surname: "Попова",
    phone: "+79876543210"
  },
];




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
export { init as phoneBookInit };