const book = {
  contacts: [
    {
      name: "John",
      phone: "+3801000000",
      email: "john@gmail.com"
    },
    {
      name: "Andrew",
      phone: "+3805456778",
      email: "and@gmail.com"
    }
  ],
  findContact(name) {
    return this.contacts.find(contact => contact.name === name);
  },
  addContact(name, phone, email) {
    const newContact = {
      name: name,
      phone: phone,
      email: email
    };
    this.contacts.push(newContact);
  }
};
console.log(book.findContact("John"));

book.addContact("Karl", "+3867890654", "karl@gmail.com");

console.log(book.contacts);
