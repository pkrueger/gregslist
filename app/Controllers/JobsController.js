// @ts-nocheck
import { appState } from "../AppState.js";
import { Job } from "../Models/Job.js";
import { jobsService } from "../Services/JobsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawJobs() {
  let template = "";
  for (let job of appState.jobs) {
    template += job.JobCardTemplate;
  }
  setHTML("listings", template);
  setHTML("canvasRight", Job.JobFormTemplate());
  setHTML("buttonGoHere", Job.JobButtonTemplate());
}

export class JobsController {
  constructor() {
    appState.on("jobs", _drawJobs);
  }

  showJobs() {
    this.getJobs();
  }

  async getJobs() {
    try {
      await jobsService.getJobs();
    } catch (error) {
      console.error("[GetJobs]", error);
      Pop.error(error);
    }
  }

  async addJob() {
    try {
      window.event.preventDefault();
      const form = window.event.target;
      let formData = getFormData(form);

      await jobsService.addJob(formData);
      form.reset();
    } catch (error) {
      console.error("[AddJob]", error);
    }
  }

  async deleteJob(id) {
    try {
      await jobsService.deleteJob(id);
    } catch (error) {
      console.error("[DeleteJob]", error);
      Pop.error(error);
    }
  }
}
