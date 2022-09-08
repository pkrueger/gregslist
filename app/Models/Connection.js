import { generateId } from "../Utils/generateId.js";

export class Connection {
  /**
   * @param {{gender: string, lookingGender: string, description: string, imgUrl: string}} data
   */
  constructor(data) {
    this.id = generateId();
    this.gender = data.gender;
    this.lookingGender = data.lookingGender;
    this.description = data.description;
    this.imgUrl = data.imgUrl;
  }

  get connectionTemplate() {
    return /*html*/ `
    <div class="col-md-4 col-lg-3 mb-3">
      <div class="card">
        <img src="${this.imgUrl}" alt="a strange man" class="img-fluid">
        <div class="card-body p-2">
          <h5>
            ${this.gender} looking for ${this.lookingGender}
          </h5>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `;
  }
}

export let ConnectionButtonTemplate = /*html*/ `
<button
    class="btn btn-outline-light"
    data-bs-toggle="offcanvas"
    data-bs-target="#banana"
  >
    💔 Add Missed Connection
  </button>
`;

export let ConnectionFormTemplate = /*html*/ `
<form onsubmit="app.connectionsController.addConnection()">

    <div class="form-floating mb-3">
      <input type="text" class="form-control" name="gender" required placeholder="Gender">
      <label for="gender">Gender</label>
    </div>

    <div class="form-floating mb-3">
      <input type="text" class="form-control" name="lookingGender" required placeholder="Who are you looking for?">
      <label for="lookingGender">Who are you looking for?</label>
    </div>

    <div class="form-floating mb-3">
      <input type="url" class="form-control" name="imgUrl" placeholder="Image Url (We are too lazy for uploads)">
      <label for="imgUrl">Image Url <i>(We are too lazy for uploads)</i></label>
    </div>

    <div class="form-floating">
      <textarea class="form-control" placeholder="Describe your Listing" name="description" required></textarea>
      <label for="description">Description</label>
    </div>

    <div class="d-flex my-4 gap-5 align-items-center">
      <button class="btn btn-primary" type="submit">Submit</button>
      <button class="btn" type="reset">Cancel</button>
    </div>

  </form>
`;

let coolGuy = new Connection({
  gender: "M",
  lookingGender: "F",
  description:
    "I saw you tying your shoe at the grocery store. I was the man who offered to tie them for you. Please contact me... I'm so lonely...",
  imgUrl: "https://media.giphy.com/media/3HnBZbCWuc8HS/giphy.gif",
});
