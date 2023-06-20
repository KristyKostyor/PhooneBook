import { phoneBookInit } from "./script.js";

import { control } from "./control.js";
import { createElement } from "./createElements.js";
import { render } from "./render.js";
import { serviceStorage } from "./serviceStorage";

const renderContacts = (elem, data) => {
  const allRow = data.map(createRow);
  elem.append(...allRow);
  return allRow;
};

const renderPhoneBook = (app, title) => {
  const header = createHeader();
  const logo = createLogo(title);
  const footerText = createCopyRight(title);
  const main = createMain();
  const footer = createFooter();
  const buttonGroup = createButtonsGroup([
    {
      className: "btn btn-primary mr-3",
      type: "button",
      text: "Добавить",
    },
    {
      className: "btn btn-danger",
      type: "button",
      text: "Удалить",
    },
  ]);
  const table = createTable();
  const { form, overlay } = createForm();

  header.headerContainer.append(logo);
  footer.footerContainer.append(footerText);
  main.mainContainer.append(buttonGroup.btnWrapper, table, overlay);
  app.append(header, main, footer);
  return {
    list: table.tbody,
    logo,
    btnAdd: buttonGroup.btns[0],
    btnDel: buttonGroup.btns[1],
    formOverlay: overlay,
    form,
  };
};

export default {
  renderContacts,
  renderPhoneBook,
};
