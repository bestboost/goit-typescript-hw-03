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
  private key: number;

  constructor(signature: number) {
    this.key = signature;
  }

  getKey() {
    return this.key;
  }
}

abstract class House {
  public door: boolean;
  public key: number;
  private tenants: string[] = [];

  constructor(signature: number) {
    this.key = signature;
  }

  public comeIn(person) {
    if (this.door === true) {
      this.tenants.push(person);
    }
  }

  public abstract openDoor(signature: number): void;
}

class MyHouse extends House {
  constructor(key: number) {
    super(key);
  }
  openDoor(key: number) {
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
