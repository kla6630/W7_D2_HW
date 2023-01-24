class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  static olderThan(personA, personB) {
    if (personA.age > personB.age) {
      return (
        personA.name +
        " " +
        personA.surname +
        " is older than " +
        personB.name +
        " " +
        personB.surname
      );
    } else if (personA.age === personB.age) {
      return (
        personA.name +
        " " +
        personA.surname +
        " and " +
        personB.name +
        " " +
        personB.surname +
        " have the same age"
      );
    } else {
      return (
        personB.name +
        " " +
        personB.surname +
        " is older than " +
        personA.name +
        " " +
        personA.surname
      );
    }
  }
}

let p1 = new Person("Mario", "Neri", "55");

let p2 = new Person("Angelina", "Prestigiacomo", "18");

let p3 = new Person("Alessandro", "Esimio", "24");

console.log(Person.olderThan(p1, p2));
console.log(Person.olderThan(p2, p3));
console.log(Person.olderThan(p1, p3));
console.log(Person.olderThan(p1, p1));
