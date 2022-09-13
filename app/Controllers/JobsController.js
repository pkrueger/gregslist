// @ts-nocheck
import { appState } from "../AppState.js";
import { Job } from "../Models/Job.js";
import { jobsService } from "../Services/JobsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function _drawJobs() {
  let template = "";
  for (let job of appState.jobs) {
    template += job.JobCardTemplate;
  }
  setHTML("listings", template);
  setHTML("formGoHere", Job.JobFormTemplate);
  setHTML("buttonGoHere", Job.JobButtonTemplate);
}

export class JobsController {
  constructor() {
    appState.on("jobs", _drawJobs);
  }

  showJobs() {
    _drawJobs();
  }

  addJob() {
    try {
      window.event.preventDefault();
      const form = window.event.target;
      let formData = getFormData(form);

      jobsService.addJob(formData);
      form.reset();
    } catch (error) {
      console.error("addJob", error);
    }
  }
}
