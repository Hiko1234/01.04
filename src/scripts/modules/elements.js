export class Elements {
  constructor() {
    this.elements = [];
  }

  addElement(element) {
    this.elements.push(element);
  }

  getElements() {
    return this.elements;
  }
}