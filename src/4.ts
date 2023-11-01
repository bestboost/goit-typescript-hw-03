interface KeyInterface {
  getSignature(): number;
}

class Key implements KeyInterface {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature() {
    return this.signature;
  }
}

class Person {
  private key: KeyInterface;

  constructor(key: KeyInterface) {
    this.key = key;
  }

  getKey() {
    return this.key;
  }
}

abstract class House {
  public door: boolean;
  public key: KeyInterface;
  private tenants: string[] = [];

  constructor(key: KeyInterface) {
    this.key = key;
  }

  public comeIn(person) {
    if (this.door === true) {
      this.tenants.push(person);
    }
  }

  public abstract openDoor(key: KeyInterface): void;
}

class MyHouse extends House {
  constructor(key: KeyInterface) {
    super(key);
  }

  openDoor(key: KeyInterface) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);

const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);
