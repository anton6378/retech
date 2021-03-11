export class Item {

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public image: string,
    public quantity: number = 0,
    public inStock: number,
    public price: number
  ) {
  }

  plus() {
    if (this.quantity < this.inStock) {
      this.quantity++;
    }
  }

  minus() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

}
