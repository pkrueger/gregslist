import { generateId } from "../Utils/generateId.js";

export class Car {
  /**
   * The data needed to make a car
   * @param {{make: string, model: string, year: number, price: number, description: string, imgUrl: string, id:string}} data
   */
  constructor(data) {
    this.id = data.id;
    this.make = data.make;
    this.model = data.model;
    this.year = data.year;
    this.price = data.price;
    this.description = data.description;
    this.imgUrl =
      data.imgUrl || "https://www.autolist.com/assets/listings/default_car.jpg";
  }

  get CarCardTemplate() {
    return /*html*/ `
      <div class="col-md-4 col-lg-3 mb-3">
        <div class="card">
          <img src="${this.imgUrl}" alt="${this.make}-${this.model}" class="img-fluid">
          <div class="card-body">
            <h5 class="text-uppercase">
            ${this.make} | ${this.model} ${this.year}
            </h5>
            <p>
              <strong>$ ${this.price}</strong>
            </p>
            <p>${this.description}</p>
          </div>
        </div>
      </div>
    `;
  }
  static CarButtonTemplate() {
    return /*html*/ `
          <button
            class="btn btn-outline-light"
            data-bs-toggle="offcanvas"
            data-bs-target="#canvasRight"
          >
            🚗 Add Car
          </button>
          `;
  }
  static CarFormTemplate() {
    return /*html*/ `
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="canvasRightLabel">Add Car</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div id="formGoHere" class="offcanvas-body">
        <!-- TODO build forms YIKES put them here DYNAMICALLY YIKES !!!!! -->
        <form onsubmit="app.carsController.addCar()">
      
          <div class="form-floating mb-3">
            <input type="text" class="form-control" name="make" required minlength="3" maxlength="20" placeholder="Make">
            <label for="make">Make</label>
          </div>
      
          <div class="form-floating mb-3">
            <input type="text" class="form-control" name="model" placeholder="Model" required>
            <label for="model">Model</label>
          </div>
      
          <div class="form-floating mb-3">
            <input type="number" class="form-control" name="year" required min="1886" max="9999" placeholder="Year">
            <label for="year">Year</label>
          </div>
      
          <div class="form-floating mb-3">
            <input type="number" class="form-control" name="price" required min="0" placeholder="Price">
            <label for="price">Price</label>
          </div>
      
          <div class="form-floating mb-3">
            <input type="url" class="form-control" name="imgUrl" placeholder="Image Url (We are too lazy for uploads)">
            <label for="imgUrl">Image Url <i>(We are too lazy for uploads)</i></label>
          </div>
      
          <div class="form-floating">
            <textarea class="form-control" placeholder="Describe your Listing" name="description"></textarea>
            <label for="description">Description</label>
          </div>
      
          <div class="d-flex my-4 gap-5 align-items-center">
          <button class="btn btn-primary" type="submit">Submit</button>
            <button class="btn" type="reset">Cancel</button>
          </div>
          
        </form>
      </div>
    `;
  }
}
