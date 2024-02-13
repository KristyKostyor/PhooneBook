
export const data = [
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
    phone: "+79876543210",
  },
];


const addContactData = (contact) => {
  data.push(contact);
  saveContactsToLocalStorage(data);
};

const saveContactsToLocalStorage = (contacts) => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
};
const removeContactFromLocalStorage = (phone) => {
  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  contacts = contacts.filter((contact) => contact.phone !== phone);
  localStorage.setItem("contacts", JSON.stringify(contacts));
};



export default {
  addContactData,
  saveContactsToLocalStorage,
  removeContactFromLocalStorage,
};
