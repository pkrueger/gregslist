import { generateId } from "../Utils/generateId.js";

export class Job {
  /**
   * @param {{company: string, jobTitle: string, hours: number, rate: number, description: string}} data
   */
  constructor(data) {
    this.id = generateId();
    this.company = data.company;
    this.jobTitle = data.jobTitle;
    this.hours = data.hours;
    this.rate = data.rate;
    this.description = data.description;
  }

  get JobCardTemplate() {
    return /*html*/ `
    <div class="col-md-4 col-lg-3 mb-3">
      <div class="card">
        <div class="card-body">
          <h3>${this.jobTitle}</h3>
          <h5>
            ${this.company}
          </h5>
          <p class="mb-2">${this.hours} hours per week | $${this.rate} per hour</p>
          <p class="m-0">${this.description}</p>
        </div>
      </div>
    </div>
    `;
  }
}

export function JobFormTemplate() {
  return /*html*/ `
  <form onsubmit="app.jobsController.addJob()">

    <div class="form-floating mb-3">
      <input type="text" class="form-control" name="company" required>
      <label for="company">Company</label>
    </div>

    <div class="form-floating mb-3">
      <input type="text" class="form-control" name="jobTitle" required>
      <label for="jobTitle">Job Title</label>
    </div>

    <div class="form-floating mb-3">
      <input type="number" class="form-control" name="hours" required>
      <label for="hours">Hours</label>
    </div>

    <div class="form-floating mb-3">
      <input type="number" class="form-control" name="rate" required>
      <label for="rate">Rate</label>
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
}

export function JobButtonTemplate() {
  return /*html*/ `
  <button
    class="btn btn-outline-light"
    data-bs-toggle="offcanvas"
    data-bs-target="#banana"
  >
    💵 Add Job
  </button>
  `;
}
