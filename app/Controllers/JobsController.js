// @ts-nocheck
import { appState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function drawJobs() {
  let template = "";
  for (let job of appState.jobs) {
    template += job.JobCardTemplate;
  }
  setHTML("listings", template);
  setHTML("formGoHere", appState.jobForm);
  setHTML("buttonGoHere", appState.jobButton);
}

export class JobsController {
  constructor() {
    appState.on("jobs", drawJobs);
  }

  showJobs() {
    drawJobs();
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
