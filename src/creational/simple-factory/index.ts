interface Door {
  getWidth(): number
  getHeight(): number
}

class WoodenDoor implements Door {
  private width: number
  private height: number

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getWidth(): number {
    return this.width
  }

  getHeight(): number {
    return this.height
  }
}

class DoorFactory {
  static makeDoor(width: number, height: number): Door {
    return new WoodenDoor(width, height);
  }
}

const door1 = DoorFactory.makeDoor(1,2)
console.log('>> width :', door1.getWidth());
console.log('>> height :', door1.getHeight());

