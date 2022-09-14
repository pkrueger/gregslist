import { generateId } from "../Utils/generateId.js";

export class Job {
  /**
   * @param {{id: string, company: string, jobTitle: string, hours: number, rate: number, description: string}} data
   */
  constructor(data) {
    this.id = data.id;
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
        <div class="card-footer d-flex align-items-center justify-content-around">
          <button class="btn text-uppercase" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
          <button class="btn text-uppercase text-success" data-bs-toggle="offcanvas" data-bs-target="#rightBar" onclick="app.jobsController.beginEdit('${this.id}')">Edit</button>
        </div>
      </div>
    </div>
    `;
  }

  static JobButtonTemplate() {
    return /*html*/ `
    <button
      class="btn btn-outline-light"
      data-bs-toggle="offcanvas"
      data-bs-target="#canvasRight"
    >
      💵 Add Job
    </button>
    `;
  }

  static JobFormTemplate() {
    return /*html*/ `
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="canvasRightLabel">Add Job</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div id="formGoHere" class="offcanvas-body">
        <!-- TODO build forms YIKES put them here DYNAMICALLY YIKES !!!!! -->
        <form onsubmit="app.jobsController.addJob()">
      
          <div class="form-floating mb-3">
            <input type="text" class="form-control" name="company" required placeholder="Company">
            <label for="company">Company</label>
          </div>
      
          <div class="form-floating mb-3">
            <input type="text" class="form-control" name="jobTitle" required placeholder="Job Title">
            <label for="jobTitle">Job Title</label>
          </div>
      
          <div class="form-floating mb-3">
            <input type="number" class="form-control" name="hours" required placeholder="Hours">
            <label for="hours">Hours</label>
          </div>
      
          <div class="form-floating mb-3">
            <input type="number" class="form-control" name="rate" required placeholder="Rate">
            <label for="rate">Rate</label>
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
      </div>
    `;
  }
}
