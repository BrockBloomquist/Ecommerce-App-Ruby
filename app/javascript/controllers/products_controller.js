import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="products"
export default class extends Controller {
  static values = { size: String, product: Object };
  addToCart() {
    console.log("Product: ", this.productValue);
  }

  selectSize(e) {
    this.sizeValue = e.target.value;
    console.log("Size: ", this.sizeValue);
    const selectedSizeEl = document.getElementById("selected-size");
    selectedSizeEl.innerText = `Selected Size: ${this.sizeValue}`;
  }
}
