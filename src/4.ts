class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }

  getSignature() {
    return this.signature;
  }
}

class Person {
  private key: object;

  constructor(key: object) {
    this.key = key;
  }

  getKey() {
    return this.key;
  }
}

abstract class House {
  public door: boolean;
  public key: object;
  private tenants: string[] = [];

  constructor(key: object) {
    this.key = key;
  }

  public comeIn(person) {
    if (this.door === true) {
      this.tenants.push(person);
    }
  }

  public abstract openDoor(key: object): void;
}

class MyHouse extends House {
  constructor(key: object) {
    super(key);
  }
  openDoor(key: object) {
    if (key === this.key) {
      return this.door === true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);

const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
