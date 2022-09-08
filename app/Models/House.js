import { generateId } from "../Utils/generateId.js";

export class House {
  /**
   * @param {{bedrooms: number, bathrooms: number, levels: number, year: number, price: number, imgUrl: string, description: string}} data
   */
  constructor(data) {
    this.id = generateId();
    this.bedrooms = data.bedrooms;
    this.bathrooms = data.bathrooms;
    this.levels = data.levels;
    this.year = data.year;
    this.price = data.price;
    this.imgUrl = data.imgUrl;
    this.description = data.description;
  }

  get HouseCardTemplate() {
    return /*html*/ `
    <div class="col-md-4 col-lg-3 mb-3">
      <div class="card">
        <img src="${this.imgUrl}" alt="a house" class="img-fluid">
        <div class="card-body">
          <h5 class="text-uppercase">
            ${this.bedrooms} bed | ${this.bathrooms} bath | ${this.levels} floor(s)
          </h5>
          <p class="mb-2">
            <strong>$ ${this.price}</strong>
          </p>
          <p class="mb-2">${this.description}</p>
          <p class="m-0">Built in ${this.year}</p>
        </div>
      </div>
    </div>
    `;
  }
}

export let HouseFormTemplate = /*html*/ `
  <form onsubmit="app.housesController.addHouse()">

    <div class="form-floating mb-3">
      <input type="number" class="form-control" name="bedrooms" required>
      <label for="bedrooms">Bedrooms</label>
    </div>

    <div class="form-floating mb-3">
      <input type="number" class="form-control" name="bathrooms" required>
      <label for="bathrooms">Bathrooms</label>
    </div>

    <div class="form-floating mb-3">
      <input type="number" class="form-control" name="levels" required>
      <label for="levels">Levels</label>
    </div>

    <div class="form-floating mb-3">
      <input type="number" class="form-control" name="year" required>
      <label for="year">Year Built</label>
    </div>

    <div class="form-floating mb-3">
      <input type="number" class="form-control" name="price" required>
      <label for="price">Price</label>
    </div>

    <div class="form-floating mb-3">
      <input type="url" class="form-control" name="imgUrl">
      <label for="imgUrl">Image Url <i>(We are too lazy for uploads)</i></label>
    </div>

    <div class="form-floating">
      <textarea class="form-control" placeholder="Describe your Listing" name="description" required></textarea>
      <label for="description">Description</label>
    </div>

    <div class="d-flex my-4 gap-5 align-items-center">
      <button class="btn" type="reset">Cancel</button>
      <button class="btn btn-primary" type="submit">Submit</button>
    </div>

  </form>
  `;

export function HouseButtonTemplate() {
  return /*html*/ `
  <button
    class="btn btn-outline-light"
    data-bs-toggle="offcanvas"
    data-bs-target="#banana"
  >
    🏠 Add House
  </button>
  `;
}
