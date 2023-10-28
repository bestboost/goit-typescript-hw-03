class Key {
  constructor(private signature: number) {}

  getSignature() {
    return this.signature;
  }
}

class Person extends Key {
  private key: number;
  private tenants: string[] = [];

  constructor(signature: number) {
    super(signature);
    this.key = signature;
  }

  public comeIn(person: string) {
    this.tenants.push(person);
  }

  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door = false;

  public comeIn(person: string) {
    if (person) {
      this.door = true;
    }
  }

  public abstract openDoor(): boolean;
}

class MyHouse extends House {
  public openDoor() {
    return true;
  }
}

const randomNumber = Math.random();

const key = new Key(randomNumber);

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
