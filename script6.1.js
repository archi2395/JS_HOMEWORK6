const user = {
  name: "Oleg",
  age: 45,
  city: "Odesa",

  getInfo: function () {
    return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`;
  }
};

console.log(user.getInfo());