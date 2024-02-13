import createElement from "./createElements";
import {createImageLogo} from './createElements';
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


const renderContacts = (elem, data) => {
  const allRow = data.map(createRow);
  elem.append(...allRow);
  return allRow;
};

const renderPhoneBook = (app, title) => {
  const header = createHeader();
  const imageLogo = createImageLogo();
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

  header.headerContainer.append(imageLogo,logo);
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
